import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Store from './../Storage'

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
        nameOfInterviewer: -1, // int
        testResult: -1, // int
        babyDob: '',
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

    const UpdateForm = (data) =>{
        setDataForm({...dataForm, ...data})
    }
    const hospitalList = Store.getLocalStorageData('hospitalList')
    const nurseList = Store.getLocalStorageData('nursesList')
    console.log(hospitalList, nurseList)
    const formSubmit = async(e) => {
        e.preventDefault();
    };
  
    return(
        <div className="col m-3">
            <form id="addbabyform" onSubmit={formSubmit} >
                {/* First Row Start*/}
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১. হাসপাতালের নামঃ</label>
                            {/* <input 
                                className="form-control" required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            /> */}
                            <select 
                                className="form-control"
                                required
                                value={dataForm.hospitalName}
                                onChange={(event) => UpdateForm({hospitalName: event.target.value})}
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
                            <label className="addform-label">২. নমুনা সংগ্রহের তারিখঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='date'
                                placeholder='dd/mm/yyyy'
                                onChange={(event) => UpdateForm({sampleCollectDate: event.target.value})}
                            />
                            
                        </div>
                    </div>
                </div>
                {/* Second Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩. আইডি নংঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                // onChange={(event) => UpdateForm({sampleCollectDate: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৪. মোবাইল নংঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder='019xx-xxxxxx'
                                onChange={(event) => UpdateForm({mobileNumber: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Third Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৫. সাক্ষাৎকার গ্রহণকারীর নামঃ</label>
                            {/* <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => UpdateForm({sampleCollectDate: event.target.value})}
                            /> */}
                            <select 
                                className="form-control"
                                required
                                value={dataForm.hospitalName}
                                onChange={(event) => UpdateForm({hospitalName: event.target.value})}
                            >
                                <option value=''>নির্বাচন করুন</option>
                            {
                                nurseList?.map( (item) => 
                                    <option value={item?.id}>{item?.name}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৬. ঠিকানাঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => UpdateForm({address: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Fourth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৭. শিশুর নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='নাম'
                                onChange={(event) => UpdateForm({babyName: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৮. শিশুর জন্ম তারিখঃ (দিন/মাস/তারিখ)</label>
                            <input 
                                className="form-control" 
                                required 
                                type='date'
                                placeholder='dd/mm/yyyy'
                                onChange={(event) => UpdateForm({babyDob: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Fiveth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৯. শিশু ছেলে/মেয়ে?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyType: event.target.value})}
                                value={dataForm.babyType == -1? '': dataForm.babyType}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>ছেলে</option>
                                <option value='1'>মেয়ে</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১০. শিশুর মায়ের নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='শিশুর মায়ের নাম'
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
                                placeholder='বয়স'
                                value={dataForm.babyMotherAge}
                                onChange={(event) => UpdateForm({babyMotherAge: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১২. বিবাহের সময় মায়ের বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => UpdateForm({motherAgeOfMarriage: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Seven Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৩. শিশুর বাবা/অভিভাবকের নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => UpdateForm({babyFatherName: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৪. শিশুর বাবা বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => UpdateForm({babyFatherAge: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Eight Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৫. সাক্ষাৎকার প্রদানকারীর নামঃ</label>
                            {/* <select className="form-control" required 
                                onChange={(event) => UpdateForm({sampleCollectDate: event.target.value})}
                                value={dataForm.babyType == -1? '': dataForm.babyType}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select> */}
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder='সাক্ষাৎকার প্রদানকারীর নাম'
                                onChange={(event) => UpdateForm({babyFatherAge: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৬. সাক্ষাৎকার প্রদানকারী সহিত শিশুর সম্পর্ক?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                value={dataForm.relationWithBaby}
                                onChange={(event) => UpdateForm({relationWithBaby: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Nine Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৭. শিশুর মায়ের শিক্ষাগত যোগ্যতাঃ (নিচের ধাপগুলো শেষ হওয়ার সাপেক্ষে নির্বাচন করুন) </label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherEduQualification: event.target.value})}
                                value={dataForm.babyMotherEduQualification == -1? '': dataForm.babyMotherEduQualification}
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
                            <label className="addform-label">১৮. শিশুর বাবার শিক্ষাগত যোগ্যতাঃ (নিচের ধাপগুলো শেষ হওয়ার সাপেক্ষে নির্বাচন করুন)</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherEduQualification: event.target.value})}
                                value={dataForm.babyFatherEduQualification == -1? '': dataForm.babyFatherEduQualification}
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
                {/* Tenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">১৯. শিশুর মায়ের পেশা?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherOccupation: event.target.value})}
                                value={dataForm.babyMotherOccupation == -1? '': dataForm.babyMotherOccupation}
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
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২০. শিশুর বাবার পেশা?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherOccupation: event.target.value})}
                                value={dataForm.babyFatherOccupation == -1? '': dataForm.babyFatherOccupation}
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
                {/* Eleventh Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২১. পরিবারের সম্ভাব্য মাসিক খরচ কত টাকা?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder=''
                                value={dataForm.familyMonthlyExpenses}
                                onChange={(event) => UpdateForm({familyMonthlyExpenses: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২২. পরিবারের সদস্য সংখ্যা কতজন?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder=''
                                value={dataForm.totalFamilyMember}
                                onChange={(event) => UpdateForm({totalFamilyMember: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                {/* Twelvesth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৩. শিশুর পূর্ববর্তী কোন সন্তান আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({previousAnyChildren: event.target.value})}
                                value={dataForm.previousAnyChildren == -1? '': dataForm.previousAnyChildren}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৪. আপনার এই শিশুর বড় ভাই অবলিক বোনের রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({previousChildrenAnemia: event.target.value})}
                                value={dataForm.previousChildrenAnemia == -1? '': dataForm.previousChildrenAnemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Thirteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৫. আপনার এই শিশুর বড় ভাই/বোনের সাথে বয়সের পার্থক্য কত?(বছর)</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                placeholder=''
                                value={dataForm.ageDifference}
                                onChange={(event) => UpdateForm({ageDifference: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৬. শিশুর মা শিশু গর্ভ অবস্থায় থাকাকালে কি গর্ভকালীন স্বাস্থ্য সেবা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({antenatalHealthcare: event.target.value})}
                                value={dataForm.antenatalHealthcare == -1? '': dataForm.antenatalHealthcare}
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
                            <label className="addform-label">২৭. শিশুর মা কি টিটি টিকা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({ttVaccine: event.target.value})}
                                value={dataForm.ttVaccine == -1? '': dataForm.ttVaccine}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৮. শিশির কি ধরনের প্রসব হয়েছে?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({deliveryProcess: event.target.value})}
                                value={dataForm.deliveryProcess == -1? '': dataForm.deliveryProcess}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>নরমাল ডেলিভারি </option>
                                <option value='1'>সিজারিয়ান</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Fifteenth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">২৯. আপনি কি কখনো থালাসেমিয়া রোগের নাম শুনেছঠা?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({knowAboutThalassemia: event.target.value})}
                                value={dataForm.knowAboutThalassemia == -1? '': dataForm.knowAboutThalassemia}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩০. শিশুর মায়ের এদিকে আত্মীয়দের মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyMotherAnemia: event.target.value})}
                                value={dataForm.babyMotherAnemia == -1? '': dataForm.babyMotherAnemia}
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
                        <div className="form-group">
                            <label className="addform-label">৩১। কিশোর বাবা অথবা বাবার দিকে আত্মীয়র মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এ ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({babyFatherAnemia: event.target.value})}
                                value={dataForm.babyFatherAnemia == -1? '': dataForm.babyFatherAnemia}
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
                            <label className="addform-label">৩২। প্রশ্ন ৩০/৩১ এই উত্তর হা হলে কার ছিল?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder=''
                                value={dataForm.whichPerson}
                                onChange={(event) => UpdateForm({whichPerson: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                
                {/* Seventeenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৩. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে আত্মীয়তা ছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({parentsAreRelative: event.target.value})}
                                value={dataForm.parentsAreRelative == -1? '': dataForm.parentsAreRelative}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৪. কি ধরনের আত্মীয়তা ছিল?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                placeholder=''
                                value={dataForm.parentsRelativeType}
                                onChange={(event) => UpdateForm({parentsRelativeType: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                
                {/* Seventeenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="addform-label">৩৫. হবে না শিশুর বাবা ও মা এর কি বিবাহের পূর্বে কোন ধরনের রক্তের পরীক্ষা করা হয়েছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => UpdateForm({beforeMarriageBloodTest: event.target.value})}
                                value={dataForm.beforeMarriageBloodTest == -1? '': dataForm.beforeMarriageBloodTest}
                            >
                                <option value=''>নির্বাচন করুন</option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className='d-flex justify-content-center'>
                    <Button variant='primary' type="submit" className="button mt-5 mb-5 float-end">Submit</Button>
                </div>
            </form>
        </div>
    )
}