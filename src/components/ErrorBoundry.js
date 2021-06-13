import React from 'react';
 
class  ErrorBoundry  extends React.Component{
    constructor(props)
    {
        super(props);
        this.ob={
            hasError:false
        };
    }
    componentDidCatch(error,info)
    {
            this.setState({hasError:true});
    }
render() {
    const {hasError}=this.ob;
    if(hasError)
    return <h1>OOpppssss......</h1>
    else{
          return (
                   <div>
                    {this.props.children}
                   </div>
                  );
         }
        }
    
}
export default ErrorBoundry;