
export function setInLocalStorage(name, value){
    localStorage.setItem(name, JSON.stringify(value))
}

export function getLocalStorageData(name){
    return JSON.parse(localStorage.getItem(name))
}

export function clearLocalStorage(name){
    localStorage.removeItem(name)
}

export function storeSendMessage(){
    const model = {
        positiveMessage: 'আপনার বাচ্চার পা থেকে রক্ত নিয়ে IEF পদ্ধতিতে থ্যালাসেমিয়া পরীক্ষার রেজাল্ট পজেটিভ হয়েছে। নবজাতক থ্যালাসেমিয়া স্ক্রীনিং প্রকল্প, ন্যাশনাল ইনস্টিটিউট অব ল্যাবরেটরি মেডিসিন অ্যান্ড রেফারেল সেন্টার, ঢাকা। আপনাকে বাচ্চার বাবা সহ ন্যাশনাল ইনস্টিটিউট অব ল্যাবরেটরি মেডিসিন অ্যান্ড রেফারেল সেন্টারে আসার জন্য আনুরধ করা হচ্ছে।',
        negativeMessage: 'আপনার বাচ্চার পা থেকে রক্ত নিয়ে IEF পদ্ধতিতে থ্যালাসেমিয়া পরীক্ষার রেজাল্ট নেগেটিভ হয়েছে। নবজাতক থ্যালাসেমিয়া স্ক্রীনিং প্রকল্প, ন্যাশনাল ইনস্টিটিউট অব ল্যাবরেটরি মেডিসিন অ্যান্ড রেফারেল সেন্টার, ঢাকা।'
    }

    const smsObject = getLocalStorageData('editsms')

    if(!smsObject?.positiveMessage && !smsObject?.negativeMessage){
        setInLocalStorage('editsms', model)
    }
    return true
}