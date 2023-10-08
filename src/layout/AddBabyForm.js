import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function AddBabyForm(){
    
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
                            <label >১. হাসপাতালের নামঃ</label>
                            <input 
                                className="form-control" required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                                {/* <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select> */}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >২. নমুনা সংগ্রহের তারিখঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='date'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                            
                        </div>
                    </div>
                </div>
                {/* Second Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৩. আইডি নংঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৪. মোবাইল নংঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Third Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৫. সাক্ষাতকার গ্রহনকারীর নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৬. ঠিকানাঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Fourth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৭. শিশুর নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৮. শিশুর জন্ম তারিখঃ (দিন/মাস/তারিখ)</label>
                            <input 
                                className="form-control" 
                                required 
                                type='date'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Fiveth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৯. শিশু ছেলে/মেয়ে?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>ছেলে</option>
                                <option value='1'>মেয়ে</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১০. শিশুর মায়ের নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Sixth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১১. শিশুর মায়ের বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১২. বিবাহের সময় মায়ের বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Seven Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১৩. শিশুর বাবা/অভিভাবকের নামঃ</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১৪. শিশুর বাবা বয়স?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Eight Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১৫. সাক্ষাৎকার প্রদানকারীর নামঃ</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১৬. সাক্ষাৎকার প্রদানকারী সহিত শিশুর সম্পর্ক?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Nine Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >১৭. শিশুর মায়ের শিক্ষাগত যোগ্যতাঃ (নিচের ধাপগুলো শেষ হওয়ার সাপেক্ষে নির্বাচন করুন) </label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >১৮. শিশুর বাবার শিক্ষাগত যোগ্যতাঃ (নিচের ধাপগুলো শেষ হওয়ার সাপেক্ষে নির্বাচন করুন)</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >১৯. শিশুর মায়ের পেশা?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >২০. শিশুর বাবার পেশা?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >২১. পরিবারের সম্ভাব্য মাসিক খরচ কত টাকা?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >২২. পরিবারের সদস্য সংখ্যা কতজন?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Twelvesth Row Start*/}
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >২৩. শিশুর পূর্ববর্তী কোন সন্তান আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >২৪. আপনার এই শিশুর বড় ভাই অবলিক বোনের রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >২৫. আপনার এই শিশুর বড় ভাই/বোনের সাথে বয়সের পার্থক্য কত?(বছর)</label>
                            <input 
                                className="form-control" 
                                required 
                                type='number'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >২৬. শিশুর মা শিশু গর্ভ অবস্থায় থাকাকালে কি গর্ভকালীন স্বাস্থ্য সেবা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >২৭. শিশুর মা কি টিটি টিকা নিয়েছিলেন?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >২৮. শিশির কি ধরনের প্রসব হয়েছে?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >২৯. আপনি কি কখনো থালাসেমিয়া রোগের নাম শুনেছঠা?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৩০. শিশুর মায়ের এদিকে আত্মীয়দের মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
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
                            <label >৩১। কিশোর বাবা অথবা বাবার দিকে আত্মীয়র মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এ ধরনের সমস্যা আছে কি?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>হ্যাঁ</option>
                                <option value='1'>জানা নেই </option>
                                <option value='2'>না</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৩২। প্রশ্ন ৩০/৩১ এই উত্তর হা হলে কার ছিল?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                
                {/* Seventeenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৩৩. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে আত্মীয়তা ছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৩৪. কি ধরনের আত্মীয়তা ছিল?</label>
                            <input 
                                className="form-control" 
                                required 
                                type='text'
                                onChange={(event) => console.log("fff ", event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                
                {/* Seventeenth Row Start*/}
                
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >৩৫. হবে না শিশুর বাবা ও মা এর কি বিবাহের পূর্বে কোন ধরনের রক্তের পরীক্ষা করা হয়েছিল?</label>
                            <select className="form-control" required 
                                onChange={(event) => console.log("fff ", event.target.value)}
                            >
                                <option value=''></option>
                                <option value='0'>না</option>
                                <option value='1'>হ্যাঁ</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <button type="submit" className="mt-5 mb-5">Submit</button>
            </form>
        </div>
    )
}