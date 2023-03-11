function getBlogData(){
    let promise = new Promise(function(resolve,reject){
        var apiResult = new Array();
        debugger;
        apiResult = JSON.parse(sessionStorage.getItem("apiResult") || "[]");
        //apiResult.image
        if(apiResult.length !=0){
            resolve(apiResult);
        }
        else{
            reject("No data found!!");
        }
    });

    return promise;
}

function showCard(apiResult){
    const main = document.getElementById('main');   
    document.getElementById('blogDiv').style.display = "none";    
          let output = ''
        // loop over the array      
          // set first row
          var datetime = new Date().toLocaleString();
          //output += `<div class="container-fluid">
            //<div class="row">`     
          apiResult.forEach(item => {  
             output += `   
                                <div class="col-12 card p-4 shadow blog_left__div">
                                    <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                        <h1 class="text-uppercase">${item.title}</h1>
                                        <p class="blog_title"> <span class="font-weight-bold">${item.titleDesc}, </span> ${datetime} </p>
                                    </div>
                                    <figure class="right_side_img mb-5">
                                        <img src=${item.imagebase64} style="width:870px;height:273px;" class="img-fluid shadow">
                                    </figure>
                                    <p><span class="font-weight-bold">${item.fname} ${item.lname}</span><p>
                                        ${item.description}
                                    </p>
                                    <div class="d-flex justify-content-between left_div_btns">
                                        <div>
                                            <button class="left_div__like" id="like_btn"><i class="fa fa-thumbs-up"></i>Like</button>
                                        </div>
                                        <div>
                                            <button class="left_div__reply" onclick="reply('reply1')">Replies <badge class="bg-white text-dark p-2">1</badge></button>
                                        </div>
                                    </div>
                                    <div class="replies" id="reply1">
                                        <div class="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div class=" reply_img mx-2 align-self-center ">
                                                <img src="https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png" />
                                            </div>
                                            <div class="reply_text__left">
                                                <p class="blog_title "> <span class="font-weight-bold"> ${item.fname}, </span> ${datetime}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
             `
          })
          // close the row
          //output += '</div></div>'
        main.innerHTML = output;
}

getBlogData().then(showCard).catch(function(error) { 
    const main = document.getElementById('main blogDiv');   
    let output = '';
    output += `
    <div class="container mt-5">
    <h1>${error}</h1></div>`
    console.log(error);
    main.innerHTML = output;
});