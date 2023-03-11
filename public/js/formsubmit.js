class BlogData{
    constructor(fname,lname,title,titleDesc,description,thumbnail,imagebase64){
        this.fname = fname;
        this.lname = lname;
        this.title = title;
        this.titleDesc = titleDesc;
        this.description = description;
        this.thumbnail = thumbnail;
        this.imagebase64 = imagebase64;
    }
}

async function readAsDataURL(file,All_Data) {
    let promise =  new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onerror = reject;
        fr.onload = () => {
            setTimeout(() => resolve(fr.result),6000);
            All_Data[0].imagebase64 = fr.result;
            sessionStorage.setItem("apiResult",JSON.stringify(All_Data));
        }
    });
    let result = await promise;
    return result;
}

All_Data = new Array();    
function submitData(){
    alert("Thank you!,your blog page posted in HomePage.");
    localStorage.clear();
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let title = document.forms["myForm"]["title"].value;
    let titleDesc = document.forms["myForm"]["titleDesc"].value;
    let description = document.forms["myForm"]["description"].value;
    let imagebase64 = "";
    let thumbnail = document.getElementById("thumbnail").files[0].name; 
    const imgPath = document.querySelector('input[type=file]').files[0];
    thumbnail = "images/" + thumbnail;
    let bannerImage = document.getElementById('thumbnail');
    const obj = new BlogData(fname,lname,title,titleDesc,description,thumbnail,imagebase64);
    var All_Data = JSON.parse(sessionStorage.getItem("apiResult") || "[]");
    //console.log(All_Data);
    if(All_Data.length > 0)
    {
        All_Data.unshift(obj);
    }
    else
    {
        All_Data.push(obj);
    }
    //console.log(All_Data);
    document.forms["myForm"]["fname"].value='';
    document.forms["myForm"]["lname"].value='';
    document.forms["myForm"]["title"].value='';
    document.forms["myForm"]["description"].value='';
    document.forms["myForm"]["thumbnail"].value='';
    readAsDataURL(imgPath,All_Data).then(res => {
        //console.log(res);
        // here bar == true
    });
    return true;
}