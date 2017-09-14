import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import firebase from 'firebase'
import { Input, Button, message } from 'antd'
import 'antd/dist/antd.css'

firebase.database.enableLogging(false, false)

const config = {
  apiKey: 'AIzaSyDNtIGOjUuFNWtmwZzKsMTSl2Ccz9PK3zc',
  authDomain: 'sizzling-heat-9345.firebaseapp.com',
  databaseURL: 'https://sizzling-heat-9345.firebaseio.com',
  projectId: 'sizzling-heat-9345',
  storageBucket: 'sizzling-heat-9345.appspot.com',
  messagingSenderId: '558192237877'
}
firebase.initializeApp(config)

const ref = firebase.database().ref()
const auth = firebase.auth()

class App extends Component {

  constructor (props) {
    super(props)

  }

  restorePassword = () => {
    console.log('restorePassword', this.email)
    const url = 'https://google.com'
    try {
      auth.sendPasswordResetEmail(this.email, {url: url})
        .then(function() {
        // Password reset email sent.
          message.success('Check your mailbox')
        })
        .catch(function(error) {
          console.log('error', error)
          message.error(error.message)
          // Error occurred. Inspect error.code.
        })
    } catch (e) {
      console.log('error', e)
      message.error(e.message)
    }
  }

  createAccount = () => {
    console.log('createAccount')
    auth.createUserWithEmailAndPassword(this.acEmail, this.acPassword)
      .then(authData =>
        message.success(`Account created, ${authData}`)
      )
      .catch(function(error) {
        console.log(error)
        message.error(error.message)
      })
  }

  render() {
    return (
      <div className='App'>
        <div>
          <div>Create an account</div>
          <Input
            placeholder='email'
            onChange={(e) => this.acEmail = e.target.value}
          />
          <div style={{marginTop: 10}}>
            <Input
              onChange={(e) => this.acPassword = e.target.value}
              placeholder='password'
            />
          </div>
          <div style={{marginTop: 10}}>
            <Button onClick={this.createAccount}>Sign Up</Button>
          </div>
        </div>

        <div style={{width: 300, marginTop: 100}}>
          <Input
            placeholder='email'
            onChange={(e) => this.email = e.target.value}
          />
          <div style={{marginTop: 10}}>
            <Button
              onClick={this.restorePassword}
            >
              Restore password
            </Button>
          </div>
        </div>
      </div>
    )
  }

}

export default App
