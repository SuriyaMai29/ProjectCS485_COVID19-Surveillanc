import React from 'react'
import AppBars from './AppBars'
import CollapsibleTable from './CollapsibleTable'
import SimpleBottomNavigation from './SimpleBottomNavigation'
export default function AdminIndex(){
    const addminData={fname:'Suriya',lname:'Meekhunthod'}
    const userList =[{fname:'Natnich',lname:'Yingyong',phnoeNo:'0922323454',email:'oneZaZa@hotmail.com',
    daily:[{date:'02/05/2020',temp:'36.5',symptoms:['dry cough','tiredness'],RoteTo:['กรุงเทพฯ','ชัยภูมิ']},
           {date:'03/05/2020',temp:'35.5',symptoms:['dry cough','tiredness','chest pain or pressure'],RoteTo:['ชัยภูมิ','นครสวรรค์']},
           {date:'04/05/2020',temp:'37.5',symptoms:['dry cough','chest pain or pressure'],RoteTo:['อยุธยา','นครสวรรค์']}]},
    {fname:'Charinrat',lname:'So',phnoeNo:'0922222222',email:'ZaZa@outlook.com',
    daily:[{date:'02/05/2020',temp:'35.5',symptoms:['dry cough','tiredness']},
           {date:'03/05/2020',temp:'35.5',RoteTo:['ชัยภูมิ','นครสวรรค์']},
           {date:'04/05/2020',temp:'36.5',symptoms:['dry cough','chest pain or pressure'],RoteTo:['อยุธยา','นครสวรรค์']}]},
   {fname:'Nat',lname:'Nat',phnoeNo:'0955555555',email:'Nat@hotmail.com',
           daily:[{date:'02/05/2020',temp:'35.5',symptoms:['dry cough','tiredness'],RoteTo:['กรุงเทพฯ','ชัยภูมิ']},
                  {date:'03/05/2020',temp:'35.8'},
                  {date:'04/05/2020',temp:'35.5'}]}]
    return(<>
    <AppBars name={`${addminData.fname}  ${addminData.lname}`}/>
    <SimpleBottomNavigation/>
    <CollapsibleTable users={userList}/>
    </>)
}