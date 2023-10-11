import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Store from './../Storage'
import * as Service from './../AllService'

export default function AddBabyForm(){

    const model = {
        babyMotherName: '',
        mobileNumber: '',
        deliveryProcess: -1, // int
        bloodCollectAge: -1, // int
        babyType: -1, // int
        address: '',
        hospitalName: '', // int
        sampleCollectDate: '',
        bloodCollectDate: '',
        nameOfInterviewer: -1, // int
        testResult: -1, // int
        babyDob: '',
        babyDOB: '',
        babyMotherAge: '',
        babyName: '',
        motherAgeOfMarriage: -1, // int
        babyFatherName: '',
        babyFatherAge: -1, // int
        relationWithBaby: '',
        babyMotherEduQualification: -1, // int
        babyFatherEduQualification: -1, // int
        babyMotherOccupation: -1, // int
        babyFatherOccupation: -1, // int
        familyMonthlyExpenses: -1, // int
        totalFamilyMember: -1, // int
        previousAnyChildren: -1, // int
        previousChildrenAnemia: -1, // int
        ageDifference: -1, // int
        antenatalHealthcare: -1, // int
        ttVaccine: -1, // int
        knowAboutThalassemia: -1, // int
        babyMotherAnemia: -1, // int
        babyFatherAnemia: -1, // int
        whichPerson: '',
        parentsAreRelative: -1, // int
        parentsRelativeType: '',
        beforeMarriageBloodTest: -1 // int
    }

    const [dataForm, setDataForm] = useState(model)
    const [disable, setDisable] = useState(false)

    const UpdateForm = (data) =>{
        setDataForm({...dataForm, ...data})
    }
    const hospitalList = Store.getLocalStorageData('hospitalList')
    const nurseList = Store.getLocalStorageData('nursesList')
    const [sortList, setList] = useState([])

    const formSubmit = async(e) => {
        e.preventDefault();
        setDisable(true)
        const response = await Service.PostRequest(dataForm)
        if(response){
            setDataForm(model)
        }
        setDisable(false)
    }
    console.log("dataForm ", dataForm)
    return(
        <div className="col m-3">
            <form id="addbabyform" onSubmit={formSubmit} >
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১. হাসপাতালের নাম কি?</label>
                            <select 
                                className="form-control"
                                value={dataForm.hospitalName}
                                onChange={(event) => {
                                    UpdateForm({hospitalName: parseInt(event.target.value), nameOfInterviewer: -1})
                                    setList(nurseList?.filter((item) => item?.hospitalId === event.target.value))
                                }}
                            >
                                <option value=''>নির্বাচন করুন</option>
                            {
                                hospitalList?.map( (item) => 
                                    <option value={item?.id}>{item?.name}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২. নমুনা সংগ্রহের তারিখ?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='date'
                                placeholder='dd/mm/yyyy'
                                value={dataForm.bloodCollectDate}
                                onChange={(event) => {
                                    // UpdateForm({sampleCollectDate: event.target.value})
                                    const dateTime = new Date(event.target.value).getTime()
                                    UpdateForm({bloodCollectDate: event.target.value, sampleCollectDate: Math.floor(dateTime / 1000)})
                                }}
                            />
                            
                        </div>
                    </div>
                </div>
                {/* Second Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩. নমুনা/রক্ত পরীক্ষার ফলাফল কি?</label>
                            <select 
                                className="form-control"
                                required
                                value={dataForm.testResult}
                                onChange={(event) => UpdateForm({testResult: parseInt(event.target.value)})}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>পজেটিভ</option>
                                <option value='1'>নেগেটিভ</option>
                            
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৪. মোবাইল নাম্বারঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='019xx-xxxxxx'
                                value={dataForm.mobileNumber}
                                onChange={(event) => UpdateForm({mobileNumber: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Third Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৫. সাক্ষাৎকার গ্রহণকারীর নাম কি?</label>
                            <select 
                                className="form-control"
                                required
                                value={dataForm.nameOfInterviewer}
                                onChange={(event) => UpdateForm({nameOfInterviewer: parseInt(event.target.value)})}
                            >
                                <option value=''>নির্বাচন করুন</option>
                            {
                                sortList?.map( (item) => 
                                    <option value={item?.id}>{item?.name}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৬. ঠিকানা কি?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                value={dataForm.address}
                                placeholder='গ্রামঃ- ,থানা/উপজেলাঃ- , জেলাঃ- , বিভাগঃ- '
                                onChange={(event) => UpdateForm({address: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Fourth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৭. শিশুর নাম কি?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='শিশুর নাম'
                                value={dataForm.babyName}
                                onChange={(event) => UpdateForm({babyName: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৮. শিশুর জন্ম তারিখ?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='date'
                                placeholder='dd/mm/yyyy'
                                value={dataForm.babyDOB}
                                onChange={(event) => {
                                    const dateTime = Math.floor(new Date(event.target.value).getTime() / 1000)
                                    UpdateForm({
                                        babyDOB: event.target.value, 
                                        babyDob: dateTime,
                                        bloodCollectAge: (dataForm.sampleCollectDate - dateTime) / 86400
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* Fiveth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৯. শিশুর লিঙ্গ কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyType: parseInt(event.target.value)})}
                                value={dataForm.babyType === -1? '': dataForm.babyType}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>ছেলে</option>
                                <option value='1'>মেয়ে</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১০. শিশুর মায়ের নাম কি?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='শিশুর মায়ের নাম'
                                value={dataForm.babyMotherName}
                                onChange={(event) => UpdateForm({babyMotherName: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Sixth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১১. শিশুর মায়ের বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='উদাহরণঃ ২০/২১'
                                value={dataForm.babyMotherAge === -1? '' :dataForm.babyMotherAge}
                                onChange={(event) => UpdateForm({babyMotherAge: parseInt(event.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১২. বিবাহের সময় শিশুর মায়ের বয়স ছিল?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='উদাহরণঃ ২০/২১'
                                value={dataForm.motherAgeOfMarriage === -1? '' :dataForm.motherAgeOfMarriage}
                                onChange={(event) => UpdateForm({motherAgeOfMarriage: parseInt(event.target.value)})}
                            />
                        </div>
                    </div>
                </div>
                {/* Seven Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৩. শিশুর বাবা/অভিভাবকের নাম কি?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='শিশুর বাবা/অভিভাবকের নাম'
                                value={dataForm.babyFatherName}
                                onChange={(event) => UpdateForm({babyFatherName: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৪. শিশুর বাবার বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='উদাহরণঃ ২০/২১'
                                value={dataForm.babyFatherAge === -1? '' :dataForm.babyFatherAge}
                                onChange={(event) => UpdateForm({babyFatherAge: parseInt(event.target.value)})}
                            />
                        </div>
                    </div>
                </div>
                {/* Eight Row Start*/}
                <div className="row mt-5">
                    {/* <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৫. সাক্ষাৎকার প্রদানকারীর নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='সাক্ষাৎকার প্রদানকারীর নাম'
                                onChange={(event) => UpdateForm({babyFatherAge: event.target.value})}
                            />
                        </div>
                    </div> */}
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৫. সাক্ষাৎকার প্রদানকারী সহিত শিশুর সম্পর্ক কি?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='শিশুর সহিত সম্পর্ক'
                                value={dataForm.relationWithBaby}
                                onChange={(event) => UpdateForm({relationWithBaby: event.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৬. শিশুর মায়ের শিক্ষাগত যোগ্যতা কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherEduQualification: parseInt(event.target.value)})}
                                value={dataForm.babyMotherEduQualification === -1? '': dataForm.babyMotherEduQualification}
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
                {/* Nine Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৭. শিশুর বাবার শিক্ষাগত যোগ্যতা কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherEduQualification: parseInt(event.target.value)})}
                                value={dataForm.babyFatherEduQualification === -1? '': dataForm.babyFatherEduQualification}
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
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৮. শিশুর মায়ের পেশা কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherOccupation: parseInt(event.target.value)})}
                                value={dataForm.babyMotherOccupation === -1? '': dataForm.babyMotherOccupation}
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
                </div>
                {/* Tenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৯. শিশুর বাবার পেশা কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherOccupation: parseInt(event.target.value)})}
                                value={dataForm.babyFatherOccupation === -1? '': dataForm.babyFatherOccupation}
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
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২০. পরিবারের সম্ভাব্য মাসিক খরচ কত টাকা?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='উদাহরনঃ- ২৫০০০'
                                value={dataForm.familyMonthlyExpenses === -1? '' :dataForm.familyMonthlyExpenses}
                                onChange={(event) => UpdateForm({familyMonthlyExpenses: parseInt(event.target.value)})}
                            />
                        </div>
                    </div>
                </div>
                {/* Eleventh Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২১. পরিবারের সদস্য সংখ্যা কতজন?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='উদাহরনঃ- ২/৪/৫'
                                value={dataForm.totalFamilyMember === -1? '' :dataForm.totalFamilyMember}
                                onChange={(event) => UpdateForm({totalFamilyMember: parseInt(event.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২২. শিশুর পূর্ববর্তী কোন সন্তান আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({previousAnyChildren: parseInt(event.target.value)})}
                                value={dataForm.previousAnyChildren === -1? '': dataForm.previousAnyChildren}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Twelvesth Row Start*/}
                {
                    dataForm.previousAnyChildren !== 1?
                
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৩. আপনার এই শিশুর বড় ভাই/বোনের রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                                <select className="form-control" required 
                                    onChange={(event) => UpdateForm({previousChildrenAnemia: parseInt(event.target.value)})}
                                    value={dataForm.previousChildrenAnemia === -1? '': dataForm.previousChildrenAnemia}
                                >
                                    <option value=''>নির্বাচন করুন</option>
                                    <option value='0'>হ্যাঁ</option>
                                    <option value='1'>জানা নেই </option>
                                    <option value='2'>না</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৪. আপনার এই শিশুর বড় ভাই/বোনের সাথে বয়সের পার্থক্য কত বছর?</label>
                                <input 
                                    className="form-control" 
                                    required 
                                    type='number'
                                    placeholder='উদাহরনঃ- ০.৫/২/৫'
                                    value={dataForm.ageDifference === -1? '' :dataForm.ageDifference}
                                    onChange={(event) => UpdateForm({ageDifference: parseInt(event.target.value)})}
                                />
                            </div>
                        </div>
                    </div>
                : null 
                }
                {/* Thirteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৫. শিশুর মা শিশু গর্ভ অবস্থায় থাকাকালে কি গর্ভকালীন স্বাস্থ্য সেবা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({antenatalHealthcare: parseInt(event.target.value)})}
                                value={dataForm.antenatalHealthcare === -1? '': dataForm.antenatalHealthcare}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৬. শিশুর মা কি টিটি টিকা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({ttVaccine: parseInt(event.target.value)})}
                                value={dataForm.ttVaccine === -1? '': dataForm.ttVaccine}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Fourteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৭. শিশুর কি ধরনের প্রসব হয়েছে?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({deliveryProcess: parseInt(event.target.value)})}
                                value={dataForm.deliveryProcess === -1? '': dataForm.deliveryProcess}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>নরমাল ডেলিভারি </option>
                                <option value='1'>সিজারিয়ান</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৮. আপনি কি কখনো থালাসেমিয়া রোগের নাম শুনেছন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({knowAboutThalassemia: parseInt(event.target.value)})}
                                value={dataForm.knowAboutThalassemia === -1? '': dataForm.knowAboutThalassemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Fifteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৯. শিশুর মায়ের দিকের আত্মীয়দের মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherAnemia: parseInt(event.target.value)})}
                                value={dataForm.babyMotherAnemia === -1? '': dataForm.babyMotherAnemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩০। শিশুর বাবা অথবা বাবার দিকে আত্মীয়র মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এ ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherAnemia: parseInt(event.target.value)})}
                                value={dataForm.babyFatherAnemia === -1? '': dataForm.babyFatherAnemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Sixteenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        {/* {
                            (dataForm.babyMotherAnemia === '0' || dataForm.babyFatherAnemia === '0')? */}
                            <div className="form-group">
                                <label className="addform-label">৩১. কার ছিল?</label>
                                <input 
                                    className="form-control" 
                                    required={(dataForm.babyMotherAnemia === 0 || dataForm.babyFatherAnemia === 0)}
                                    disabled={!(dataForm.babyMotherAnemia === 0 || dataForm.babyFatherAnemia === 0)}
                                    type='text'
                                    placeholder='কার আত্মীয়র সমস্যা ছিল'
                                    value={dataForm.whichPerson}
                                    onChange={(event) => UpdateForm({whichPerson: event.target.value})}
                                />
                            </div>
                            {/* :null
                        } */}
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩২. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে আত্মীয়তা ছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({parentsAreRelative: parseInt(event.target.value)})}
                                value={dataForm.parentsAreRelative === -1? '': dataForm.parentsAreRelative}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* Seventeenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৩. কি ধরনের আত্মীয়তা ছিল?</label>
                            <input 
                                className="form-control" 
                                required={dataForm.parentsAreRelative === 1}
                                disabled={dataForm.parentsAreRelative !== 1} 
                                type='text'
                                placeholder='কেমন আত্মীয় ছিল'
                                value={dataForm.parentsRelativeType}
                                onChange={(event) => UpdateForm({parentsRelativeType: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৪. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে কোন ধরনের রক্তের পরীক্ষা করা হয়েছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({beforeMarriageBloodTest: parseInt(event.target.value)})}
                                value={dataForm.beforeMarriageBloodTest === -1? '': dataForm.beforeMarriageBloodTest}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className='d-flex justify-content-center'>
                    <Button variant={disable? 'secondary':'primary'} type="submit" className="button mt-5 mb-5 float-end"
                        disabled={disable}
                    >Submit</Button>
                </div>
            </form>
        </div>
    )
}