import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Store from '../../Storage'
import * as Service from '../../AllService'
import InnerLayer from '../../global/InnerLayer';
import { useParams } from 'react-router-dom';
import FormPartOne from './FormPartOne';
import { useEffect } from 'react';
import FormPartTwo from './FormPartTwo';
import FormPartThree from './FormPartThree';

export default function AddBabyForm(){
    const params = useParams();

    const [dataForm, setDataForm] = useState({})    
    const [activeFormPart, setActiveFormPart] = useState('partOne')

    useEffect(() => {
        const data = SearchById(params?.id)
        console.log("useEffect ",data)
        setDataForm({
            CustomId: data?.CustomId || '',
            mobileNumber: data?.mobileNumber || '',
            mobileNumber2: data?.mobileNumber2 || '',
            babyName: data?.babyName || '',
            babyType: checkValue(data?.babyType) || '',
            babyMotherName: data?.babyMotherName || '',        
            babyDob: checkValue(data?.babyDob) || '', //Long
            babyDOB: checkValue(data?.babyDob) ?formatDate(data?.babyDob) : '',
            deliveryProcess: checkValue(data?.deliveryProcess) || '', //int
            bloodCollectAge: checkValue(data?.bloodCollectAge) || '', //int
            sampleCollectDate: checkValue(data?.sampleCollectDate) || '', // Long
            bloodCollectDate: checkValue(data?.sampleCollectDate)? formatDate(data?.sampleCollectDate) : '',
            hospitalId: checkValue(data?.hospitalId) || '', //int
            address: data?.address || '',
            nameOfInterviewer:  checkValue(data?.nameOfInterviewer) || '', //int
            testResult:  setTestResult(data?.testResult)|| 'TRT_UNKNOWN', 
            babyMotherAge: checkValue(data?.babyMotherAge) || '', //int
            motherAgeOfMarriage: checkValue(data?.motherAgeOfMarriage) || '', //int
            babyFatherName: data?.babyFatherName || '',
            babyFatherAge: checkValue(data?.babyFatherAge) || '', //int
            relationWithBaby: data?.relationWithBaby || '',
            babyMotherEduQualification: checkValue(data?.babyMotherEduQualification) || '', //int
            babyFatherEduQualification: checkValue(data?.babyFatherEduQualification) || '', //int
            babyMotherOccupation: checkValue(data?.babyMotherOccupation) || '', // int
            babyFatherOccupation: checkValue(data?.babyFatherOccupation) || '', // int
            familyMonthlyExpenses: checkValue(data?.familyMonthlyExpenses) || '', // int
            totalFamilyMember: checkValue(data?.totalFamilyMember) || '', // int
            previousAnyChildren: checkValue(data?.previousAnyChildren) || '', // int
            previousChildrenAnemia: checkValue(data?.previousChildrenAnemia) || '', // int
            ageDifference: checkValue(data?.ageDifference) || '', // int
            antenatalHealthcare: checkValue(data?.antenatalHealthcare) || '', // int
            ttVaccine: checkValue(data?.ttVaccine) || '', // int
            knowAboutThalassemia: checkValue(data?.knowAboutThalassemia) || '', // int
            babyMotherAnemia: checkValue(data?.babyMotherAnemia) || '', // int
            babyFatherAnemia: checkValue(data?.babyFatherAnemia) || '', // int
            whichPerson: data?.whichPerson || '',
            parentsAreRelative: checkValue(data?.parentsAreRelative) || '', // int
            parentsRelativeType: data?.parentsRelativeType || '',
            beforeMarriageBloodTest: checkValue(data?.beforeMarriageBloodTest) || '' ,// int
            UploadStatus: data?.UploadStatus || 'US_PENDING',
            Note: data?.Note || '',
            IsSmsSend: data?.IsSmsSend || false
        })
    },[])


    const UpdateForm = (data) =>{
        setDataForm({...dataForm, ...data})
    }


    console.log("dataForm ", dataForm)

    const callBack = (data) =>{
        setActiveFormPart(data)
    }

    return(
        <InnerLayer>
            {
                activeFormPart == 'partOne'?
                    <FormPartOne 
                        dataId={params?.id}
                        dataForm={dataForm} 
                        UpdateForm={UpdateForm}
                        callBack={callBack}
                    />
                : activeFormPart == 'partTwo'?
                    <FormPartTwo 
                        dataId={params?.id}
                        key={'two'}
                        dataForm={dataForm} 
                        UpdateForm={UpdateForm}
                        callBack={callBack}
                    />
                : activeFormPart == 'partThree'?
                    <FormPartThree
                        dataId={params?.id}
                        key={'three'}
                        dataForm={dataForm} 
                        UpdateForm={UpdateForm}
                        callBack={callBack}
                    />
                : null
            }
        
        </InnerLayer>
    )
}

const SearchById = (id) =>{
    const data = Store.getLocalStorageData('babysList')
    if(data){
       return data.filter((ele) => ele?.id == id)[0]
    }
    return {}
}

function formatDate(timestamp) {
    const  date = new Date(parseInt(timestamp)* 1000)
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
}
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function checkValue(value){
    try {
        const val = parseInt(value)
        if(isNaN(val) || val < 0) return ''
        else return value.toString()
    } catch (error) {
        console.log("checkValue ", error)
        return ''
    }
}

function setTestResult(value){
    if(value == 1) return 'TRT_POSITIVE'
    else if( value == 2) return 'TRT_NEGATIVE'
    else return 'TRT_UNKNOWN'
}