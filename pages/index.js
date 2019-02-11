import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login.js'


// Port in to using useState hooks, if you need state
const Index = () => (
	<div>
		<Login/>
	</div>
)

Index.getInitialProps = async({ store }) => {
	// Adding a default/initialState can be done as follows:
	// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
}

export default connect()(Index)
