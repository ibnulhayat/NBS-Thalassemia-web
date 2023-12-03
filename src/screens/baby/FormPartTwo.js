import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Store from '../../Storage'

export default function FormPartTwo({dataId, dataForm, UpdateForm, callBack}){
 
    const hospitalList = Store.getLocalStorageData('hospitalList')
    const nurseList = Store.getLocalStorageData('nursesList')
    const [sortList, setList] = useState([])

    useEffect(()=> {
        if(dataId){
            setList(nurseList?.filter((item) => item?.hospitalId === dataForm?.hospitalId))
        }
    },[])

    const formTwoSubmit = async(e) => {
        e.preventDefault();
        const buttonText = e?.nativeEvent?.submitter?.innerText
        if(buttonText == "Next"){
            callBack('partThree')
        }
    }

    return(
        <div className="col m-3">
            <form id="addbabyform" onSubmit={formTwoSubmit}>
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১১. হাসপাতালের নাম কি?</label>
                            <select 
                                
                                className="form-control"
                                value={dataForm?.hospitalId}
                                onChange={(event) => {
                                    UpdateForm({hospitalId: event.target.value, nameOfInterviewer: ''})
                                    setList(nurseList?.filter((item) => item?.hospitalId === event.target.value))
                                }}
                            >
                                <option value=''>নির্বাচন করুন</option>
                            {
                                hospitalList?.map( (item) => 
                                    <option value={item?.id} key={item?.id} >{item?.name}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">১২. সাক্ষাৎকার গ্রহণকারীর নাম কি?</label>
                            <select 
                                className="form-control"
                                
                                value={dataForm?.nameOfInterviewer}
                                onChange={(event) => UpdateForm({nameOfInterviewer: event.target.value})}
                            >
                                <option value=''>নির্বাচন করুন</option>
                            {
                                sortList?.map( (item) => 
                                    <option value={item?.id} key={item?.id} >{item?.name}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                </div>
                {/* Second Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৩. ঠিকানা কি?</label>
                            <input 
                                className="form-control" 
                                 
                                type='text'
                                autoComplete='on'
                                value={dataForm?.address}
                                placeholder='গ্রামঃ- ,থানা/উপজেলাঃ- , জেলাঃ- , বিভাগঃ- '
                                onChange={(event) => UpdateForm({address: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">১৪. শিশুর মায়ের বয়স?</label>
                            <input 
                                className="form-control" 
                                 
                                min={'0'}
                                autoComplete='on'
                                type='number'
                                placeholder='উদাহরণঃ ২০/২১'
                                value={dataForm?.babyMotherAge}
                                onChange={(event) => UpdateForm({babyMotherAge: setValue(event.target.value)})}
                            />
                        </div>
                    </div>
                </div>
                {/* Third Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৫. বিবাহের সময় শিশুর মায়ের বয়স ছিল?</label>
                            <input 
                                className="form-control" 
                                 
                                autoComplete='on'
                                type='number'
                                placeholder='উদাহরণঃ ২০/২১'
                                value={dataForm?.motherAgeOfMarriage}
                                onChange={(event) => UpdateForm({motherAgeOfMarriage: setValue(event.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">১৬. শিশুর বাবা/অভিভাবকের নাম কি?</label>
                            <input 
                                className="form-control" 
                                 
                                type='text'
                                autoComplete='on'
                                placeholder='শিশুর বাবা/অভিভাবকের নাম'
                                value={dataForm.babyFatherName}
                                onChange={(event) => UpdateForm({babyFatherName: event.target.value})}
                            />
                        </div>
                    </div>
                </div>

                {/* Fourth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৭. শিশুর বাবার বয়স?</label>
                            <input 
                                className="form-control" 
                                 
                                type='number'
                                autoComplete='on'
                                placeholder='উদাহরণঃ ২০/২১'
                                value={dataForm?.babyFatherAge}
                                onChange={(event) => UpdateForm({babyFatherAge: setValue(event.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">১৮. সাক্ষাৎকার প্রদানকারী সহিত শিশুর সম্পর্ক কি?</label>
                            <input 
                                className="form-control" 
                                 
                                autoComplete='on'
                                type='text'
                                placeholder='শিশুর সহিত সম্পর্ক'
                                value={dataForm?.relationWithBaby}
                                onChange={(event) => UpdateForm({relationWithBaby: event.target.value})}
                            />
                        </div>
                    </div>
                </div>


                {/* Fifth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৯. শিশুর মায়ের শিক্ষাগত যোগ্যতা কি?</label>
                            <select className="form-control"  
                                onChange={(event) => UpdateForm({babyMotherEduQualification: event.target.value})}
                                value={dataForm?.babyMotherEduQualification}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>অপ্রাতিষ্ঠানিক শিক্ষা </option>
                                <option value='1'>এক প্রাইমারি</option>
                                <option value='2'>মাধ্যমিক</option>
                                <option value='3'>এসএসসি/ দাখিল</option>
                                <option value='4'>এই এস সি /আলিম </option>
                                <option value='5'>ডিগ্রি /ফাজিল </option>
                                <option value='6'>মাস্টার্স / কামিল</option>
                                <option value='7'>অন্যান্য </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">২০. শিশুর বাবার শিক্ষাগত যোগ্যতা কি?</label>
                            <select className="form-control"  
                                onChange={(event) => UpdateForm({babyFatherEduQualification: event.target.value})}
                                value={dataForm?.babyFatherEduQualification}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>অপ্রাতিষ্ঠানিক শিক্ষা </option>
                                <option value='1'>এক প্রাইমারি</option>
                                <option value='2'>মাধ্যমিক</option>
                                <option value='3'>এসএসসি/ দাখিল</option>
                                <option value='4'>এই এস সি /আলিম </option>
                                <option value='5'>ডিগ্রি /ফাজিল </option>
                                <option value='6'>মাস্টার্স / কামিল</option>
                                <option value='7'>অন্যান্য </option>
                            </select>
                        </div>
                    </div>
                </div>


                {/* Fsixth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২১. শিশুর মায়ের পেশা কি?</label>
                            <select className="form-control"  
                                onChange={(event) => UpdateForm({babyMotherOccupation: event.target.value})}
                                value={dataForm?.babyMotherOccupation}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>গৃহিণী </option>
                                <option value='1'>সরকারি চাকুরী </option>
                                <option value='2'>কর্মী গৃহকর্মী </option>
                                <option value='3'>দিনমজুর </option>
                                <option value='4'>ছোট ব্যবসা (মূলধন ৪,০০০ টাকা পর্যন্ত) </option>
                                <option value='5'>বড় ব্যবসা (মূলধন ৪০০০ টাকার বেশি)</option>
                                <option value='6'>শিক্ষক</option>
                                <option value='7'>অন্যান্য </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label"> ২২. শিশুর বাবার পেশা কি?</label>
                            <select className="form-control"  
                                onChange={(event) => UpdateForm({babyFatherOccupation: event.target.value})}
                                value={dataForm?.babyFatherOccupation}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>বেকার </option>
                                <option value='1'>সরকারি চাকুরী </option>
                                <option value='2'>এনজিও কর্মী </option>
                                <option value='3'>গৃহস্থালিকা/দিনমজুর/রিকশাচালক </option>
                                <option value='4'>ছোট ব্যবসা (মূলধন ৪,০০০ টাকা পর্যন্ত) </option>
                                <option value='5'>বড় ব্যবসা (মূলধন ৪০০০ টাকার বেশি)</option>
                                <option value='6'>শিক্ষক</option>
                                <option value='7'>অন্যান্য </option>
                            </select>
                        </div>
                    </div>
                </div>


                {/* Seventh Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৩. পরিবারের সম্ভাব্য মাসিক খরচ কত টাকা?</label>
                            <input 
                                className="form-control" 
                                 
                                type='number'
                                min='0'
                                autoComplete='on'
                                placeholder='উদাহরনঃ- ২৫০০০'
                                value={dataForm?.familyMonthlyExpenses}
                                onChange={(event) => UpdateForm({familyMonthlyExpenses: setValue(event.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 mar-top">
                        <div className="form-group">
                            <label className="addform-label">২৪. পরিবারের সদস্য সংখ্যা কতজন?</label>
                            <input 
                                className="form-control"  
                                type='number'
                                autoComplete='on'
                                placeholder='উদাহরনঃ- ২/৪/৫'
                                value={dataForm?.totalFamilyMember}
                                onChange={(event) => UpdateForm({totalFamilyMember: setValue(event.target.value)})}
                            />
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <Button 
                        variant='primary'
                        className="button me-5 float-end"
                        onClick={() => callBack('partOne')}
                    >Previous</Button>

                    <Button 
                        variant='primary' 
                        className="button float-end"
                        type="submit" 
                    >Next </Button>
                </div>
            </form>
        </div>
    )
}

function setValue(value){
    try {
        const val = parseInt(value)
        if(isNaN(val) || val < 0) return ''
        else return value
    } catch (error) {
        return ''
    }
}