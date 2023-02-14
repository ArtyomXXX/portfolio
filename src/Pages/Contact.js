import React, {Component, Fragment} from 'react';

class Contact extends Component {
    state = {
        inputText: '',
        textareaText: '',
        showData: {
            name: '',
            text: '',
        }
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            inputText: value,
        });
    }

    handlePhoneInputChange = ({target: {value}}) => {
        this.setState({
            inputPhon: value,
        })
    }

    handleTextareaChange = ({target: {value}}) => {
        this.setState({
            textareaText: value,
        })
    }

    handleShow = (e) => {
        e.preventDefault();
        const {inputText, inputPhone, textareaText} = this.state;
        this.setState({
            inputText: '',
            inputPhone: '',
            textareaText: '',
            showData: {
                name: inputText,
                phone: inputPhone,
                text: textareaText,
            }
        })
    }
    
    render() {
        const {inputText, inputPhone, textareaText, showData} = this.state;
        const {name, phone, text} = showData;

        return (
            <>
              <footer className="section-footer section">
                    <div className="container">
                        <div className="contact">
                             <Fragment>
                                <form className='form'>
                                <h1 className='form-title'>Let's start a conversation.</h1>

                                <input type="text" name="fullname" placeholder="Enter your full name" value={inputText} onChange={this.handleInputChange} required />
                                <input type="text" name="phone"  placeholder="Enter your phone number" value={inputPhone} onChange={this.handlePhoneInputChange} required />
                                <textarea id="text" style={{width:"100%", height:"150px"}} placeholder="Leave your message" value={textareaText} onChange={this.handleTextareaChange}></textarea>
                                <button className='form-button' type="submit">Submit</button>
                                </form>
                             </Fragment>
                        </div>
                    </div>  
              </footer>
            </>
        );
    }
}

export default Contact;