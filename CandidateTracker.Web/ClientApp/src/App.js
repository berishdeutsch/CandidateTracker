import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Pages/Home';
import Layout from './Layout';
import AddCandidateForm from './Pages/AddCandidateForm';
import { CandidateContextComponent } from './CandidateContext';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import Details from './Pages/Details';

function App() {
    return (
        <CandidateContextComponent>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addcandidateform' component={AddCandidateForm} />
            <Route exact path='/pending' component={Pending} />
            <Route exact path='/confirmed' component={Confirmed} />
            <Route exact path='/refused' component={Refused} />
            <Route exact path='/pending/details/:id' component={Details} />
        </Layout>
        </CandidateContextComponent>
    );
}
export default App;