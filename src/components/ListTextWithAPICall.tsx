import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsRequest } from "../store/actions/postsActions/postsActions"
import { RootState } from '../store/reducers/rootReducer'

type Props = {}

const ListTextWithAPICall = (props: Props) => {
  const dispatch = useDispatch()
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  )

  useEffect(() => {
    dispatch(fetchPostsRequest())
    console.error('test list text with api call useEffect')
  }, [])


  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  )
}

export default ListTextWithAPICall
