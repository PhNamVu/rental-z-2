import { useRoute } from '@react-navigation/native'
import {
  Box,
  Text,
  VStack,
  Button,
  View,
  Input,
  Select,
  CheckIcon,
  ScrollView,
} from 'native-base'
import React from 'react'
import { Formik } from 'formik'

import { RentalSchemaValidation } from '../helpers/validation'
import Colors from '../constants/Colors'
import { negativeToast, positiveToast } from '../helpers/toaster'
import {
  MyUploadDocument,
  useRentalDetailQuery,
  useUpdateRentalMutation,
} from '../generated/hooks'
import { useAuth } from '../hooks/useAuth'

const UpdateRentalScreen = () => {
  const route = useRoute()
  const { id }: any = route.params

  const {
    state: { user },
  }: any = useAuth()
  const { data, loading } = useRentalDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  })
  const rental = data?.rentals[0]

  const [updateRental] = useUpdateRentalMutation()

  const handleSubmit = async (values: any) => {
    try {
      await updateRental({
        variables: {
          id,
          object: {
            title: values.title,
            price: parseInt(values.price),
            area: parseInt(values.area),
            bedroom: parseInt(values.bedroom),
            location: values.location,
            description: values.description,
            typeId: parseInt(values.typeId),
            furnitureId: parseInt(values.furnitureId),
            reporterId: user.uid,
            thumbnail: values.thumbnail,
          },
        },
        refetchQueries: [
          {
            query: MyUploadDocument,
            variables: {
              id: user?.id,
            },
          },
        ],
      })

      positiveToast('Update Successful')
    } catch (error) {
      negativeToast('Fail')
      console.error(error)
    }
  }

  if (loading) return <Box> Loading</Box>

  return (
    <ScrollView>
      <VStack flex={1} mt={20} mx={10}>
        <Box>
          <Text
            mb={5}
            fontSize="3xl"
            fontWeight="bold"
            color={Colors.primary.text}
          >
            Update 🏠
          </Text>
        </Box>
        <Box>
          <Formik
            initialValues={{
              title: rental?.title,
              thumbnail: rental?.thumbnail,
              price: rental?.price ? `${rental.price}` : '',
              area: rental?.area ? `${rental?.area}` : '',
              bedroom: rental?.bedroom ? `${rental?.bedroom}` : '',
              location: rental?.location,
              description: rental?.description,
              typeId: rental?.typeId ? `${rental?.typeId}` : '',
              furnitureId: rental?.furnitureId ? `${rental?.furnitureId}` : '',
            }}
            onSubmit={(values) => {
              console.log('values', values)
            }}
            validationSchema={RentalSchemaValidation}
          >
            {({
              isSubmitting,
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              resetForm,
            }) => (
              <View>
                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.title}
                  onChangeText={handleChange('title')}
                  onBlur={() => setFieldTouched('title')}
                  placeholder="Title"
                  isInvalid={touched.title && !!errors.title}
                />
                {touched.title && errors.title && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.title}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.thumbnail}
                  onChangeText={handleChange('thumbnail')}
                  onBlur={() => setFieldTouched('thumbnail')}
                  placeholder="Thumbnail"
                  isInvalid={touched.thumbnail && !!errors.thumbnail}
                />
                {touched.thumbnail && errors.thumbnail && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.thumbnail}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.location}
                  onChangeText={handleChange('location')}
                  onBlur={() => setFieldTouched('location')}
                  placeholder="Location"
                  isInvalid={touched.location && !!errors.location}
                />
                {touched.location && errors.location && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.location}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.price}
                  onChangeText={handleChange('price')}
                  onBlur={() => setFieldTouched('price')}
                  placeholder="Price"
                  isInvalid={touched.price && !!errors.price}
                />
                {touched.price && errors.price && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.price}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.area}
                  onChangeText={handleChange('area')}
                  onBlur={() => setFieldTouched('area')}
                  placeholder="Area"
                  isInvalid={touched.area && !!errors.area}
                />
                {touched.area && errors.area && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.area}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.bedroom}
                  onChangeText={handleChange('bedroom')}
                  onBlur={() => setFieldTouched('bedroom')}
                  placeholder="Bedroom"
                  isInvalid={touched.bedroom && !!errors.bedroom}
                />
                {touched.bedroom && errors.bedroom && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.bedroom}
                  </Text>
                )}

                <Select
                  selectedValue={values.typeId}
                  p={3}
                  mt={5}
                  placeholder="Property type"
                  _selectedItem={{
                    bg: 'blue.500',
                    endIcon: <CheckIcon size="5" />,
                  }}
                  onValueChange={handleChange('typeId')}
                >
                  <Select.Item label="Flat" value="1" />
                  <Select.Item label="House" value="2" />
                  <Select.Item label="Bungalow" value="3" />
                </Select>
                {touched.typeId && errors.typeId && (
                  <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                    {errors.typeId}
                  </Text>
                )}

                <Select
                  selectedValue={values.furnitureId}
                  mt={5}
                  p={3}
                  placeholder="Furniture type"
                  _selectedItem={{
                    bg: 'blue.500',
                    endIcon: <CheckIcon size="5" />,
                  }}
                  onValueChange={handleChange('furnitureId')}
                >
                  <Select.Item label="Furnished" value="1" />
                  <Select.Item label="Unfurnished" value="2" />
                  <Select.Item label="Part Furnished" value="3" />
                </Select>

                <Button
                  mt={5}
                  color="#3740FE"
                  onPress={() => handleSubmit(values)}
                >
                  Update
                </Button>
              </View>
            )}
          </Formik>
        </Box>
      </VStack>
    </ScrollView>
  )
}

export default UpdateRentalScreen
