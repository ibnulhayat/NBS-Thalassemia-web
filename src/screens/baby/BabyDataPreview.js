import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

export default function BabyDataPreview({show, callBack, dataForm}){

    return(
        <Modal show={show} size="xl">
            <div className='modal-main' style={{height: 'fit-content'}}>
                <div className='col m-3'>
                    <div className='d-flex justify-content-center mt-3 mb-3'>
                        <h3 className='fw-bold'>Data Preview</h3>
                    </div>
                    <div className='row border rounded-top ms-2 me-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১. আইডি নং</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.CustomId}</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২.প্রথম মোবাইল নাম্বারঃ</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.mobileNumber}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩.দ্বিতীয় মোবাইল নাম্বারঃ</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.mobileNumber2}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৪. শিশুর নাম</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyName}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৫. শিশুর লিঙ্গ</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyType}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৬. শিশুর মায়ের নাম</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyMotherName}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৭. শিশুর জন্ম তারিখ</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyDOB}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৮. শিশুর কি ধরনের প্রসব হয়েছে</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.deliveryProcess}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৯. নমুনা সংগ্রহের তারিখ</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.bloodCollectDate}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১০. শিশুর বয়স</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.bloodCollectAge}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১১. হাসপাতালের নাম</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.hospitalId}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১২. সাক্ষাৎকার গ্রহণকারীর নাম</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.nameOfInterviewer}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৩. ঠিকানা </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.address}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৪. শিশুর মায়ের বয়স</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyMotherAge}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৫. বিবাহের সময় শিশুর মায়ের বয়স ছিল</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.motherAgeOfMarriage}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৬. শিশুর বাবা/অভিভাবকের নাম </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyFatherName}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৭. শিশুর বাবার বয়স</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyFatherAge}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৮. সাক্ষাৎকার প্রদানকারী সহিত শিশুর সম্পর্ক</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.relationWithBaby}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">১৯. শিশুর মায়ের শিক্ষাগত যোগ্যতা</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyMotherEduQualification}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২০. শিশুর বাবার শিক্ষাগত যোগ্যতা</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyFatherEduQualification}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২১. শিশুর মায়ের পেশা</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyMotherOccupation}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২২. শিশুর বাবার পেশা</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyFatherOccupation}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৩. পরিবারের সম্ভাব্য মাসিক খরচ কত টাকা</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.familyMonthlyExpenses}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৪. পরিবারের সদস্য সংখ্যা কতজন</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.totalFamilyMember}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৫. শিশুর পূর্ববর্তী কোন সন্তান আছে কি?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.previousChildrenAnemia}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৬. আপনার এই শিশুর বড় ভাই/বোনের সাথে বয়সের পার্থক্য কত বছর</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.ageDifference}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৭. আপনার এই শিশুর বড় ভাই/বোনের রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.previousChildrenAnemia}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৮. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে কোন ধরনের রক্তের পরীক্ষা করা হয়েছিল?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.beforeMarriageBloodTest}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">২৯. শিশুর মা শিশু গর্ভ অবস্থায় থাকাকালে কি গর্ভকালীন স্বাস্থ্য সেবা নিয়েছিলেন?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.antenatalHealthcare}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩০. শিশুর মা কি টিটি টিকা নিয়েছিলেন?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.ttVaccine}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩১. শিশুর মায়ের দিকের আত্মীয়দের মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এই ধরনের সমস্যা আছে কি?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyMotherAnemia}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩২. শিশুর বাবা অথবা বাবার দিকে আত্মীয়র মধ্যে কারো রক্তশূন্যতা জনিত সমস্যা অথবা বারবার রক্ত নিতে হয় এ ধরনের সমস্যা আছে কি?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.babyFatherAnemia}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩৩. কার ছিল?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.whichPerson}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩৪. শিশুর বাবা ও মা এর কি বিবাহের পূর্বে আত্মীয়তা ছিল?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.parentsAreRelative}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩৫. কি ধরনের আত্মীয়তা ছিল?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.parentsRelativeType}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩৬. আপনি কি কখনো থালাসেমিয়া রোগের নাম শুনেছন?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.knowAboutThalassemia}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩৭. নমুনা/রক্ত পরীক্ষার ফলাফল কি?</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.ttestResulte}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row border rounded-bottom border-top-0 me-2 ms-2 p-1'>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">৩৮. ডক্টর নোট</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="addform-label">: {dataForm?.Note}</label>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5 mb-5'>
                        <Button
                            variant={'danger'}
                            className="button me-5 float-end"
                            onClick={()=>callBack('cancel')}
                        >Cancel</Button>
                        
                        <Button 
                            variant={'success'} 
                            className="button float-end"
                            onClick={()=>callBack('ok')}
                        >Ok </Button>
                        
                    </div>
                </div>
            </div>
        </Modal>
    )
}