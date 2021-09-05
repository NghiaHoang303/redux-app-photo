import React from 'react'
import PropTypes from 'prop-types'
import { Switch,Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main';
import AddEditPage from './pages/AddEdit';
import NotFound from '../../components/NotFound';

function Photo(props) {
    const match = useRouteMatch()
    console.log('match: ', {match} );
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}/>
            
            <Route path={`${match.url}/add`} component= {AddEditPage}/>
            <Route path={`${match.url}/:photoId`} component= {AddEditPage}/>


            <Route component= {NotFound} />
        </Switch>
    )
}

Photo.propTypes = {}

export default Photo

