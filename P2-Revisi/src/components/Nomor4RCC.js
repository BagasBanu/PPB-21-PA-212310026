import React, { Component } from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';


class Nomor4RCC extends Component {

    constructor(props) {
        super(props);
        this.state = { identity:{npm:212310026 ,firstname: "Bagas",middlename:"Banu",lastname:"Wasito",},
                
        educations:[{ id: 1, school: 'SDN Cipaku Perumda' },
        { id: 2, school: 'SMP Bhakti Insani' },
        { id: 3, school: 'SMK Bina Informatika' }],

        mobile_phone: '0895332780347',
        email: '212310026@student.ibik.ac.id',
        gender: 'M',
        weight_body: 70
           
        }
    }
    


    render() {
        return (  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderWidth: 2, padding: 15, width: 300 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: "center" }}> MyBio </Text>
            <Text style={{ fontWeight: 'bold' }}>Identity:</Text>
            <Text>NPM               : {this.state.identity.npm}</Text>
            <Text>First Name     : {this.state.identity.firstname}</Text>
            <Text>Middle Name : {this.state.identity.middlename}</Text>
            <Text>Last Name     : {this.state.identity.lastname}</Text>

            <Text style={{ fontWeight: 'bold' }}>Educations:</Text>
            {this.state.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.school}</Text>
                )
            })}

            <Text style={{ fontWeight: 'bold' }}>Other:</Text>
            <Text>Mobile Phone : {this.state.mobile_phone}</Text>
            <Text>Email : {this.state.email}</Text>
            <Text>Gender : {this.state.gender}</Text>
            <Text>Weight Body : {this.state.weight_body}</Text>

            <Text style={{textAlign : 'center' }}>RCC</Text>
        </View>
    </View> );
    }
}

export default Nomor4RCC;