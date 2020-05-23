import React from 'react'
import RegionGroup from './RegionGroup'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CountryTransfer from './CountryTransfer'
import { Handler } from 'leaflet'

export default function Route(){
    const [countrys ,setCountry] = React.useState(['เชียงราย','เชียงใหม่','น่าน','พะเยา','แพร่','แม่ฮ่องสอน','ลำปาง','ลำพูน','อุตรดิตถ์']);
    function HandleN(event){
        setCountry(['เชียงราย','เชียงใหม่','น่าน','พะเยา','แพร่','แม่ฮ่องสอน','ลำปาง','ลำพูน','อุตรดิตถ์'])
    }
    function HandleC(event){
        setCountry(['กรุงเทพมหานคร','กำแพงเพชร','ชัยนาท','นครนายก','นครปฐม','นครสวรรค์','นนทบุรี','ปทุมธานี','พระนครศรีอยุธยา',
        'พิจิตร','พิษณุโลก','เพชรบูรณ์','ลพบุรี','สมุทรปราการ','สมุทรสงคราม','สมุทรสาคร','สระบุรี','สิงห์บุรี','สุโขทัย','สุพรรณบุรี','อ่างทอง','อุทัยธานี'])
    }
    function HandleE(event){
        setCountry(['ชลบุรี','ฉะเชิงเทรา','ระยอง','สระแก้ว','จันทบุรี','ปราจีนบุรี','ตราด'])
    }
    function HandleNE(event){
        setCountry(['กาฬสินธุ์','ขอนแก่น','ชัยภูมิ','นครพนม','นครราชสีมา','บึงกาฬ','บุรีรัมย์','มหาสารคาม','มุกดาหาร','ยโสธร','	ร้อยเอ็ด',
        'เลย','ศรีสะเกษ','สกลนคร','สุรินทร์','หนองคาย','หนองบัวลำภู','อำนาจเจริญ','อุดรธานี','อุบลราชธานี'])
    }
    function HandleS(event){
        setCountry(['กระบี่','ชุมพร','ตรัง','นครศรีธรรมราช','นราธิวาส','ปัตตานี','พังงา','พัทลุง','ภูเก็ต','ยะลา',
        'ระนอง','สงขลา','สตูล','สุราษฎร์ธานี'])
    }
    function HandleW(event){
        setCountry(['กาญจนบุรี','ตาก','ประจวบคีรีขันธ์','เพชรบุรี','ราชบุรี'])
    }  
    const useStyles = makeStyles((theme) => ({
        title: {
            marginTop: '1%',
            textAlign: 'center',
        },
    
    }));
    const classes = useStyles()
    return(
     <>
      <Typography variant="h6" className={classes.title} gutterBottom>
                Route To
      </Typography>
    <RegionGroup actions={[HandleN,HandleC,HandleNE,HandleE,HandleS,HandleW]}></RegionGroup>
    <CountryTransfer  list={countrys}/>
    </>
    )
}