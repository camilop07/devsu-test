import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {Button} from '@components/index';
import {styles} from '@screens/AddProduct/AddProductScreen.Style';
import {AddProductScreenProps} from '@utils/interface/navigation.interface';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextInput} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  useAddProductMutation,
  useLazyValidateIDQuery,
  useUpdateProductMutation,
} from '@api/hooks';
import moment from 'moment';

const AddProductScreen = ({navigation, route}: AddProductScreenProps) => {
  const [addProduct, {isLoading: isCreating}] = useAddProductMutation();
  const [updateProduct, {isLoading: isUpdating}] = useUpdateProductMutation();
  const [validateId, {isLoading: isValidating}] = useLazyValidateIDQuery();
  const item = route?.params?.item;

  const errorMessages = useMemo(() => {
    return {
      required: 'Este campo es requerido',
      id: 'ID no válido!',
      name: 'Nombre no válido',
      description: 'Descripción no válida',
      date: 'Fecha no válida',
    };
  }, []);

  const formSchema = Yup.object().shape({
    id: Yup.string()
      .min(3, errorMessages.id)
      .max(10, errorMessages.id)
      .required(errorMessages.required),
    name: Yup.string()
      .min(5, errorMessages.name)
      .max(100, errorMessages.name)
      .required(errorMessages.required),
    description: Yup.string()
      .min(10, errorMessages.description)
      .max(200, errorMessages.description)
      .required(errorMessages.required),
    logo: Yup.string().required(errorMessages.required),
    date_release: Yup.string()
      .required(errorMessages.required)
      .test('date-validation', errorMessages.date, value => {
        const date = Date.parse(value);
        console.log('XXXXX', moment(date), moment());
        return !isNaN(date) && date > Date.now();
      }),
    date_revision: Yup.string().required(errorMessages.required),
  });

  const onSubmitValues = useCallback(
    async values => {
      if (item) {
        const validation = await validateId(values.id).unwrap();
        if (validation) {
          const response = await updateProduct(values).unwrap();
          navigation.navigate('HomeScreen', {
            fromUpdating: true,
            item: response.data,
          });
        }
      } else {
        await addProduct(values);
        navigation.goBack();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const initialForm = useMemo(
    () => ({
      id: item?.id || '',
      name: item?.name || '',
      description: item?.description || '',
      logo: item?.logo || '',
      date_release: item?.date_release || '',
      date_revision: item?.date_revision || '',
    }),
    [
      item?.id,
      item?.name,
      item?.description,
      item?.logo,
      item?.date_release,
      item?.date_revision,
    ],
  );

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
    setFieldTouched,
  } = useFormik({
    initialValues: initialForm,
    validationSchema: formSchema,
    onSubmit: onSubmitValues,
    enableReinitialize: true,
  });

  const setModified = async (field: string, value: string) => {
    await setFieldValue(field, value);
    await setFieldTouched(field);
  };

  const idError = useMemo(
    () => errors.id && touched.id,
    [errors.id, touched.id],
  );

  const nameError = useMemo(
    () => errors.name && touched.name,
    [errors.name, touched.name],
  );

  const descriptionError = useMemo(
    () => errors.description && touched.description,
    [errors.description, touched.description],
  );

  const logoError = useMemo(
    () => errors.logo && touched.logo,
    [errors.logo, touched.logo],
  );

  const releaseDateError = useMemo(
    () => errors.date_release && touched.date_release,
    [errors.date_release, touched.date_release],
  );

  const setDates = async (value: string) => {
    if (value.length === 10 && !isNaN(Date.parse(value))) {
      const date_revision = moment(value).add(1, 'year').format('YYYY-MM-DD');
      setFieldValue('date_revision', date_revision);
      setFieldTouched('date_revision');
    }
    await setFieldValue('date_release', value);
    await setFieldTouched('date_release');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Formulario de Registro</Text>
        <View style={styles.field}>
          <Text>ID</Text>
          <TextInput
            style={[
              styles.inputText,
              idError ? styles.errorInputText : undefined,
            ]}
            onChangeText={value => setModified('id', value)}
            value={values.id}
          />
          {idError && <Text style={styles.errorText}>{errors.id}</Text>}
        </View>
        <View style={styles.field}>
          <Text>Nombre</Text>
          <TextInput
            style={[
              styles.inputText,
              nameError ? styles.errorInputText : undefined,
            ]}
            onChangeText={value => setModified('name', value)}
            value={values.name}
          />
          {nameError && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>
        <View style={styles.field}>
          <Text>Descripción</Text>
          <TextInput
            style={[
              styles.inputText,
              descriptionError ? styles.errorInputText : undefined,
            ]}
            onChangeText={value => setModified('description', value)}
            value={values.description}
          />
          {descriptionError && (
            <Text style={styles.errorText}>{errors.description}</Text>
          )}
        </View>
        <View style={styles.field}>
          <Text>Logo</Text>
          <TextInput
            style={[
              styles.inputText,
              logoError ? styles.errorInputText : undefined,
            ]}
            onChangeText={value => setModified('logo', value)}
            value={values.logo}
          />
          {logoError && <Text style={styles.errorText}>{errors.logo}</Text>}
        </View>
        <View style={styles.field}>
          <Text>Fecha Liberación</Text>
          <TextInput
            style={[
              styles.inputText,
              releaseDateError ? styles.errorInputText : undefined,
            ]}
            onChangeText={value => setDates(value)}
            value={String(values.date_release)}
            placeholder={'AAAA-mm-dd'}
            maxLength={10}
          />
          {releaseDateError && (
            <Text style={styles.errorText}>{errors.date_release}</Text>
          )}
        </View>
        <View style={styles.field}>
          <Text>Fecha Revisión</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            onChangeText={value => setModified('date_revision', value)}
            value={String(values.date_revision)}
          />
        </View>
      </View>
      <Button
        label={'Enviar'}
        onPress={handleSubmit as () => void}
        type={'primary'}
        size={'full'}
        disabled={isCreating || isUpdating || isValidating}
      />
      <Button
        label={'Reiniciar'}
        onPress={resetForm as () => void}
        type={'ghost'}
        size={'full'}
        disabled={isCreating || isUpdating || isValidating}
      />
    </SafeAreaView>
  );
};

export default AddProductScreen;
