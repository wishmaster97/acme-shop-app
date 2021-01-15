import React,{Component} from 'react';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className='section-wrapper'>
            <div className="content-section">
                <div className="container">
                    <div className="w-richtext">
                    <h1 className='error-text'>Ooops!Page not Found </h1>
                    </div>
                </div>
            </div>
        </div>  );
    }
}
 
export default Error;