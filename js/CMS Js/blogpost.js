let CreateDiv = document.querySelector('.CreateDiv');
let postPageDashbord = document.querySelector('.post-page-dashbord');
let topicSelection = document.querySelector('.topicSelection');
// class uniq counter 
let count = 1;
// main obj 
const valueObj = {};
let createWrittenFiled = function(e){
    e.preventDefault();

    // select all option form SelectBox-option
    let SelectBoxOptions = document.querySelectorAll('.SelectBox-option option');
    SelectBoxOptions.forEach((option)=>{
        if(option.selected == true){
            if(option.value == 'MainHeader'){
                // create header input area
                let header = 
                    `<div class="headerUpload-postPage">
                        <h2>Main Header:</h2>
                        <input type="text" name="mainHeader${count}" placeholder="Write important Header your Blog">
                    </div>`;
                    postPageDashbord.innerHTML += header;
                    
                    
            }else if(option.value == 'img'){
                //create banner area
                let bannerUploading = 
                    `<div class="imageUpload">
                    <h2>Banner Image:</h2>
                    <div class="upload-img-box-dashbord">
                        <input type="file" name="banner${count}" hidden>
                        <div>
                            <i class='bx bx-upload'></i>
                            <p>Size  3:2</p>
                        </div>
                    </div>
                    </div>`;
                    postPageDashbord.innerHTML += bannerUploading;
                    
                
            }else if(option.value == 'withHeaderText'){
                let headerAndText = 
                    `<div class="headerWithText-dashbord">
                    <h2>Header & Text:</h2>
                    <input type="text" name="headerWithText${count}" placeholder="Header paragraph">
                    <textarea name="headerWithText-Text${count}" placeholder="Write paragraph About your Header" cols="100%" rows="7"></textarea>
                    </div>`;
                    postPageDashbord.innerHTML += headerAndText;
                    

            }else if(option.value == 'withoutHeaderText'){
                let onlyText = 
                    `<div class="headerWithText-dashbord Only-paragraph-dashbord">
                    <h2>Only Text:</h2>
                    <textarea name="headerWithoutText${count}" placeholder="Write paragraph About your Header" name="" id="" cols="100%" rows="7"></textarea>
                    </div>`;
                    postPageDashbord.innerHTML += onlyText;
                    
                
            }else if(option.value == 'CotationText'){
                let contationSpeach = 
                    `<div class="headerWithText-dashbord Only-paragraph-dashbord cotetion-text-dashbord">
                        <h2>Inverted text:</h2>
                        <div>
                            <textarea name="InveretedText${count}" placeholder="Inverted speach" name="" id="" cols="100%" rows="7"></textarea>
                        </div>
                    </div>`;
                    postPageDashbord.innerHTML += contationSpeach;
                    
                
            }else if(option.value == 'listWithHeader'){
                let createListWithHeader = 
                    `<div class="headerWithList-dashbord">
                        <h2>Header & List:</h2>
                        <div id="list-header-input" class="ListAddDiv" id="btn-with-header">
                            <input name="ListHeader${count}" type="text" placeholder="Header the list">
                            
                        </div>
                        <div id="HeaderLishAdd" class="add-create-list-button with-header-btn-dashbord">
                            <i class='bx bx-plus'></i>
                        </div>
                    </div>`;
                    postPageDashbord.innerHTML += createListWithHeader;
                    

                
            }else if(option.value == 'listWithoutHeader'){
                let createListWithoutHeader = 
                    `<div class="headerWithList-dashbord only-list-dashbord">
                    <h2>Only List:</h2>
                    <div class="ListAddDiv" id="withoutHeade">
                        
                    </div>
                    <div id="withoutHEaderList" class="add-create-list-button">
                        <i class='bx bx-plus'></i>
                    </div>
                    </div>`;
                    postPageDashbord.innerHTML += createListWithoutHeader;
                    

            }else{
                console.log('sorry');
            }

        }

        //img upload function
        let allImgBox = document.querySelectorAll('.imageUpload');
        allImgBox.forEach((singleImg) => {
            singleImg.onclick = () => {
                let file = singleImg.querySelector('input');
                file.click();
            }
        });

        // list create with header
        let HeaderLishAdd = document.querySelector("#HeaderLishAdd");
        let withoutHEaderList = document.querySelector('#withoutHEaderList');
        if(HeaderLishAdd){
            HeaderLishAdd.onclick = () => {
                let list = document.querySelector('#list-header-input');
                let singleList = `<input name="HeaderWithList${count}" type="text" placeholder="List"  value="b" class="listWithHeader__">`;
                list.innerHTML += singleList;
                count++;
            }
        }


        // list create without header
        if(withoutHEaderList){
            withoutHEaderList.onclick = () => {
                let withoutHeade = document.querySelector('#withoutHeade');
                let listSingle = `<input name="headerWithoutList${count}" type="text" placeholder="List" value="a" class="withouHeadeList__">`;
                withoutHeade.innerHTML += listSingle;
                count++;
            }
        }


        // All child input and textarea store variable 
        let inputValueGet = postPageDashbord.querySelectorAll('input');
        let textAreaValueGet = postPageDashbord.querySelectorAll('textarea');
        let postBtn = document.querySelector('.post-blog-submit-button');

        //main object where store all data

        postBtn.onclick = (e)=> {
            e.preventDefault();


            //random number create random ID
            let RandomID = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
            let charecterLength = characters.length;
            for(let i = 0; i < 25; i++){
                RandomID += characters.charAt(Math.floor(Math.random() * charecterLength))
            }
            valueObj['ID'] = RandomID;

            // option topic select oparation
            let topicSelectionOption = topicSelection.querySelectorAll('option');
            topicSelectionOption.forEach((singleTopic)=>{
                if(singleTopic.selected == true){
                    if(singleTopic.value == 'Education'){
                        valueObj['EduTopic'] = singleTopic.value;
                    }else if(singleTopic.value == 'Information'){
                        valueObj['InfoTopic'] = singleTopic.value;
                    }else if(singleTopic.value == 'Inspiration'){
                        valueObj['InspiTopic'] = singleTopic.value;
                    }else{
                        console.log('default topic');
                    }
                }
            })

            // date 
            let dataStore = document.getElementById('toDayDate');
            valueObj['postDate'] = dataStore.value;

            // with header lish data 
            let list = document.querySelector('#list-header-input');
            if(list){
                let allListWithHeader = list.querySelectorAll('input');
                allListWithHeader.forEach(data=>{
                    let dataAttr = data.name;
                    let dataVal = data.value;
                    valueObj[dataAttr] = dataVal;
                });
            }
            

            // without header lish data 
            let withoutHeade = document.querySelector('#withoutHeade');
            if(withoutHeade){
                let listINput = withoutHeade.querySelectorAll('input');
                listINput.forEach(data=>{
                    let dataAttr = data.name;
                    let dataVal = data.value;
                    valueObj[dataAttr] = dataVal;
                })
            }
            
                
            

            // all input data oparation here
            inputValueGet.forEach( (input) => {
                let nameAttr = input.name;
                let valueAttr = input.value;
                valueObj[nameAttr] = valueAttr;// all input data store here
            });
            
            // all input data oparation here
            textAreaValueGet.forEach( (textarea) => {
                let valAttr = textarea.value;
                let nameAttr = textarea.name;
                valueObj[nameAttr] = valAttr;
            });

            //object conver to json formate
            let allPostedData = JSON.stringify(valueObj);

            // for(let valuex in valueObj){
            //     // console.log(valuex);
            //     console.log(valuex+": "+valueObj[valuex]);
            // }
            console.log(allPostedData);

            
            


        }

    })
    count++;
}

CreateDiv.addEventListener('click', createWrittenFiled);



