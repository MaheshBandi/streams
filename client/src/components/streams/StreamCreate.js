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

     onSubmit(formValues){
         console.log(formValues);
     }
    
    render(){
        console.log(this.props);
        return(
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field  name="tittle" component={this.renderInput} label="Enter Tittle"/>
                    <Field  name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="ui button primary">submit</button>
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