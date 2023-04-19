import React from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';



const MyBio = {identity:{npm:212310026 ,firstname: "Bagas", middlename:"Banu", lastname:"Wasito",},
            
            educations:[{ id: 1, school: 'SDN Cipaku Perumda' },
                        { id: 2, school: 'SMP Bhakti Insani' },
                        { id: 3, school: 'SMK Bina Informatika' }],
        
             mobile_phone: '0895332780347',
             email: '212310026@student.ibik.ac.id',
             gender: 'M',
             weight_body: 70
}

const Nomor4RFC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 2, padding: 15, width: 300 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: "center" }}>MyBio</Text>

                <Text style={{ fontWeight: 'bold' }}>Identity: </Text>
                <Text>NPM               : {MyBio.identity.npm}</Text>
                <Text>First Name     : {MyBio.identity.firstname}</Text>
                <Text>Middle Name : {MyBio.identity.middlename}</Text>
                <Text>Last Name     : {MyBio.identity.lastname}</Text>

                <Text style={{ fontWeight: 'bold' }}>Educations: </Text>
                {MyBio.educations.map((education) => {
                    return (
                        <Text>{education.id}. {education.school}</Text>
                    )
                })}

                <Text style={{ fontWeight: 'bold' }}>Other: </Text>
                <Text>Mobile Phone : {MyBio.mobile_phone}</Text>
                <Text>Email : {MyBio.email}</Text>
                <Text>Gender : {MyBio.gender}</Text>
                <Text>Weight Body : {MyBio.weight_body}</Text>
                <Text style={{fontWeight:"bold", textAlign:'center'}}>RFC</Text>
            </View>
        </View>
    );
}

export default Nomor4RFC;