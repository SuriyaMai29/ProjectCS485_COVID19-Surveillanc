import React from 'react'
import '../MyCss/login.css'
import SingInSide from './SingInSide'
import Button from '@material-ui/core/Button'
import SingUpSide from './SingUpSide'


export default class login extends React.Component {
state={
IsSingUp: false,
}
  toggleSingUp=(event)=>{
              this.setState({IsSingUp: !this.state.IsSingUp})
          }
    render() {
        
            
        return (< div className="login">
             <div className='element' id='rightLogin'>
                <h1 id='sysName'><strong>MORNITOR COVID19</strong></h1>
                
                <div className="css-1axz6b9">
                    <div className="css-v5g2u3">
                        <div className="logo">
                            <h1 >ระบบเฝ้าระวังไวรัสโควิด19</h1>
                            <div className='regis'> <h2 >สมัครสมาชิกได้ที่นี่</h2>
                            <from className="BtnRegis"> 
                            <Button  onClick={this.toggleSingUp} variant="contained" color="secondary">
                             Sing Up 
                             </Button>
                              </from>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
            <div className='element' id='leftLogin'>
            {(this.state.IsSingUp)?<SingUpSide/>:
            <SingInSide/>}
            </div>

           
           

        </div>
        )
    }
}