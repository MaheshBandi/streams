import React from  'react';
import {Field,reduxForm} from 'redux-form';

 class StreamCreate extends React.Component{
     renderInput(formProps){   
        const {input,label} = formProps;   
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
            </div>
        );
     }

    
    render(){
        console.log(this.props);
        return(
            <div>
                <form className="ui form">
                    <Field  name="tittle" component={this.renderInput} label="Enter Tittle"/>
                    <Field  name="description" component={this.renderInput} label="Enter Description"/>
                </form>
            </div>
        );
    }
}

export default reduxForm(
    {
        form:'streamCreate'
    }
)(StreamCreate);