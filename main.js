
window.onload = () => {

    // SELECTION PART
    const layout = document.querySelector('.center_div'),
          menu_btn = document.querySelector('.menu_btn'),
          bgColors = document.querySelector('.bgColors'),
          colors = document.querySelectorAll('.color');

    menu_btn.addEventListener('click',function(){

        bgColors.classList.toggle('show')

    })

    // CHANGE CALCULATOR BACKGROUND COLOR

    if(bgColors){
        colors.forEach(item =>{
            
            item.addEventListener('click',()=>{
                
                changeColor(item)
                bgColors.classList.toggle('show')
            })
        })
    }

    // CHANGE COLOR FUNCTION
    function changeColor(item){
        if(item.classList.contains('blue')){

            layout.classList = "center_div bg-blue"

        }else if(item.classList.contains('white')){

            layout.classList = "center_div bg-white"

        }else{

            layout.classList = "center_div bg-light-blue"

        }
    }

    // WORKING ON INPUT OR CALCULATION AREA

    const inp_btn = document.querySelector('.input_btn'),
          btns = document.querySelectorAll('.input_btn button'),
          input = document.getElementById('input_field'),
          recent = document.getElementById('recent_result')
    

    inp_btn.addEventListener('submit',function(e){
        e.preventDefault();
    })

    btns.forEach(btn => {
        btn.addEventListener('click',function(){
            setField(btn.value)
        })
    })

    //SET INPUT FIELD
    let dot = 0


    function setField(value){
        if(value === 'ac'){
            input.value = '0'
            dot = 0
        }else if(value === 'clear'){
            clearLast(input.value)
        }else if(value === '%' || value === '/' || value === 'x' || value === '-'|| value === '+' ){

            dot = 0
            setOperation(value)
        }else if( value === '='){

            dot = 0
            setResult(input.value)
        }else{
            setNumber(value)
        }
    }

    function clearLast(value){
        let val = value.slice(0,-1)
        input.value = val
        if(input.value === ''){
            input.value = '0'
        }
    }

    function setOperation(value){
        if(input.value.charAt(input.value.length-1) === '.'){
            input.value += '0'
        }
        let val = input.value
        let len = val.length - 1

        if(checkParamiter(val.charAt(len))){
            val = val.slice(0,-1)
            input.value = val + value


        }else{
            input.value += value
        }

        if(value === '%'){
            percent()
        }
    }


    function setNumber(value){

        if(value === '.'){
            dot++
        }
        if(value === '.' && dot > 1){
            value = ''
        }
        if(input.value === '0'){
            if(value === '.'){
                input.value += value
            }else{
                input.value = value
            }
        }else{
            input.value += value
        }
        
    }

    function percent(){
        
    }

    function setResult(value){
        
    }

    function checkParamiter(value){
        if(value === '/' || value === 'x' || value === '-'|| value === '+' ){
            return true
        }
        return false
    }
}