import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const PostRentalDocument = gql`
  mutation postRental($object: rentals_insert_input!) {
    insert_rentals(objects: [$object]) {
      affected_rows
    }
  }
`
export type PostRentalMutationFn = Apollo.MutationFunction<
  Types.PostRentalMutation,
  Types.PostRentalMutationVariables
>

/**
 * __usePostRentalMutation__
 *
 * To run a mutation, you first call `usePostRentalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostRentalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postRentalMutation, { data, loading, error }] = usePostRentalMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostRentalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostRentalMutation,
    Types.PostRentalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostRentalMutation,
    Types.PostRentalMutationVariables
  >(PostRentalDocument, options)
}
export type PostRentalMutationHookResult = ReturnType<
  typeof usePostRentalMutation
>
export type PostRentalMutationResult =
  Apollo.MutationResult<Types.PostRentalMutation>
export type PostRentalMutationOptions = Apollo.BaseMutationOptions<
  Types.PostRentalMutation,
  Types.PostRentalMutationVariables
>
export const MyUploadDocument = gql`
  query myUpload($reporterId: String!) {
    rentals(where: { reporterId: { _eq: $reporterId } }) {
      id
      location
      price
      bedroom
      area
      thumbnail
      title
    }
  }
`

/**
 * __useMyUploadQuery__
 *
 * To run a query within a React component, call `useMyUploadQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyUploadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyUploadQuery({
 *   variables: {
 *      reporterId: // value for 'reporterId'
 *   },
 * });
 */
export function useMyUploadQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.MyUploadQuery,
    Types.MyUploadQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.MyUploadQuery, Types.MyUploadQueryVariables>(
    MyUploadDocument,
    options
  )
}
export function useMyUploadLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.MyUploadQuery,
    Types.MyUploadQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.MyUploadQuery, Types.MyUploadQueryVariables>(
    MyUploadDocument,
    options
  )
}
export type MyUploadQueryHookResult = ReturnType<typeof useMyUploadQuery>
export type MyUploadLazyQueryHookResult = ReturnType<
  typeof useMyUploadLazyQuery
>
export type MyUploadQueryResult = Apollo.QueryResult<
  Types.MyUploadQuery,
  Types.MyUploadQueryVariables
>
export const DeleteRentalDocument = gql`
  mutation deleteRental($id: String!) {
    delete_rentals(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type DeleteRentalMutationFn = Apollo.MutationFunction<
  Types.DeleteRentalMutation,
  Types.DeleteRentalMutationVariables
>

/**
 * __useDeleteRentalMutation__
 *
 * To run a mutation, you first call `useDeleteRentalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRentalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRentalMutation, { data, loading, error }] = useDeleteRentalMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRentalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteRentalMutation,
    Types.DeleteRentalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.DeleteRentalMutation,
    Types.DeleteRentalMutationVariables
  >(DeleteRentalDocument, options)
}
export type DeleteRentalMutationHookResult = ReturnType<
  typeof useDeleteRentalMutation
>
export type DeleteRentalMutationResult =
  Apollo.MutationResult<Types.DeleteRentalMutation>
export type DeleteRentalMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteRentalMutation,
  Types.DeleteRentalMutationVariables
>
export const RentalDetailDocument = gql`
  query rentalDetail($id: String!) {
    rentals(where: { id: { _eq: $id } }) {
      id
      location
      price
      bedroom
      area
      thumbnail
      title
      description
      typeId
      furnitureId
      notes(order_by: { createdAt: asc }) {
        owner {
          email
        }
        note
        id
        createdAt
      }
    }
  }
`

/**
 * __useRentalDetailQuery__
 *
 * To run a query within a React component, call `useRentalDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useRentalDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRentalDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRentalDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.RentalDetailQuery,
    Types.RentalDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Types.RentalDetailQuery,
    Types.RentalDetailQueryVariables
  >(RentalDetailDocument, options)
}
export function useRentalDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.RentalDetailQuery,
    Types.RentalDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.RentalDetailQuery,
    Types.RentalDetailQueryVariables
  >(RentalDetailDocument, options)
}
export type RentalDetailQueryHookResult = ReturnType<
  typeof useRentalDetailQuery
>
export type RentalDetailLazyQueryHookResult = ReturnType<
  typeof useRentalDetailLazyQuery
>
export type RentalDetailQueryResult = Apollo.QueryResult<
  Types.RentalDetailQuery,
  Types.RentalDetailQueryVariables
>
export const UpdateRentalDocument = gql`
  mutation updateRental($id: String, $object: rentals_set_input!) {
    update_rentals(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type UpdateRentalMutationFn = Apollo.MutationFunction<
  Types.UpdateRentalMutation,
  Types.UpdateRentalMutationVariables
>

/**
 * __useUpdateRentalMutation__
 *
 * To run a mutation, you first call `useUpdateRentalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRentalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRentalMutation, { data, loading, error }] = useUpdateRentalMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateRentalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateRentalMutation,
    Types.UpdateRentalMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.UpdateRentalMutation,
    Types.UpdateRentalMutationVariables
  >(UpdateRentalDocument, options)
}
export type UpdateRentalMutationHookResult = ReturnType<
  typeof useUpdateRentalMutation
>
export type UpdateRentalMutationResult =
  Apollo.MutationResult<Types.UpdateRentalMutation>
export type UpdateRentalMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateRentalMutation,
  Types.UpdateRentalMutationVariables
>
export const AllRentalsDocument = gql`
  query allRentals($where: rentals_bool_exp) {
    rentals(where: $where) {
      id
      location
      price
      bedroom
      area
      thumbnail
      title
    }
  }
`

/**
 * __useAllRentalsQuery__
 *
 * To run a query within a React component, call `useAllRentalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRentalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRentalsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAllRentalsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.AllRentalsQuery,
    Types.AllRentalsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.AllRentalsQuery, Types.AllRentalsQueryVariables>(
    AllRentalsDocument,
    options
  )
}
export function useAllRentalsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.AllRentalsQuery,
    Types.AllRentalsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Types.AllRentalsQuery,
    Types.AllRentalsQueryVariables
  >(AllRentalsDocument, options)
}
export type AllRentalsQueryHookResult = ReturnType<typeof useAllRentalsQuery>
export type AllRentalsLazyQueryHookResult = ReturnType<
  typeof useAllRentalsLazyQuery
>
export type AllRentalsQueryResult = Apollo.QueryResult<
  Types.AllRentalsQuery,
  Types.AllRentalsQueryVariables
>
export const PostRentalNoteDocument = gql`
  mutation postRentalNote($object: rental_note_insert_input!) {
    insert_rental_note(objects: [$object]) {
      affected_rows
    }
  }
`
export type PostRentalNoteMutationFn = Apollo.MutationFunction<
  Types.PostRentalNoteMutation,
  Types.PostRentalNoteMutationVariables
>

/**
 * __usePostRentalNoteMutation__
 *
 * To run a mutation, you first call `usePostRentalNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostRentalNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postRentalNoteMutation, { data, loading, error }] = usePostRentalNoteMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostRentalNoteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostRentalNoteMutation,
    Types.PostRentalNoteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostRentalNoteMutation,
    Types.PostRentalNoteMutationVariables
  >(PostRentalNoteDocument, options)
}
export type PostRentalNoteMutationHookResult = ReturnType<
  typeof usePostRentalNoteMutation
>
export type PostRentalNoteMutationResult =
  Apollo.MutationResult<Types.PostRentalNoteMutation>
export type PostRentalNoteMutationOptions = Apollo.BaseMutationOptions<
  Types.PostRentalNoteMutation,
  Types.PostRentalNoteMutationVariables
>
export const UsersDocument = gql`
  query users($id: String) {
    users(where: { id: { _eq: $id } }) {
      id
      firstName
      lastName
      email
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.UsersQuery,
    Types.UsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.UsersQuery, Types.UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.UsersQuery,
    Types.UsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.UsersQuery, Types.UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<
  Types.UsersQuery,
  Types.UsersQueryVariables
>
export const PostUserDocument = gql`
  mutation postUser($object: users_insert_input!) {
    insert_users(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type PostUserMutationFn = Apollo.MutationFunction<
  Types.PostUserMutation,
  Types.PostUserMutationVariables
>

/**
 * __usePostUserMutation__
 *
 * To run a mutation, you first call `usePostUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUserMutation, { data, loading, error }] = usePostUserMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostUserMutation,
    Types.PostUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostUserMutation,
    Types.PostUserMutationVariables
  >(PostUserDocument, options)
}
export type PostUserMutationHookResult = ReturnType<typeof usePostUserMutation>
export type PostUserMutationResult =
  Apollo.MutationResult<Types.PostUserMutation>
export type PostUserMutationOptions = Apollo.BaseMutationOptions<
  Types.PostUserMutation,
  Types.PostUserMutationVariables
>
