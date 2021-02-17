import React,{ Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";



export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1000,
            amount:"0"
        }
    }

    displayAlert=()=>{
        Alert.alert("Invalid Text","Please enter numeric value only");
    }

    calculateAmount=async (type)=>{
        const { amount, count } = this.state;
        if(!isNaN(amount))
        {
            let value=await parseInt(amount);
            await this.setState({count:type=="add" ? count+value : count-value>0 ? count-value : 0 });
        }
        else{
            this.displayAlert();
        }
    }


    render(){
        const { count, amount } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.boxView}>
                 <Text style={styles.headingText}>{count+""}</Text>
                </View>
                <TextInput style={styles.valueText} 
                placeholder="Please enter value" 
                keyboardType="decimal-pad" 
                onChangeText={(text)=>this.setState({amount:parseInt(text)>0 ? parseInt(text)+"":"0"})} 
                value={amount}></TextInput>
                
                <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.buttonStyle} 
                onPress={()=>this.calculateAmount("add")}>
                    <Text style={styles.buttonText}>
                        Add
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} 
                onPress={()=>this.calculateAmount("minus")}>
                    <Text style={styles.buttonText}>
                        Subtract
                    </Text>
                </TouchableOpacity>
                </View>
               
            </View>
        )
    }
}