window.onload = function(){

    var mas = document.getElementsByClassName('layer');
    var j = 0;
    var y = 0;
    document.querySelector('.jlehman').onmousewheel = function(event){
        //кроссбраузерность, что бы срабатывало и в Мозиле фаерфокс
        event = event || window.event;
        if (event.deltaY > 0){
             y = y + Math.round(event.deltaY);
        }
        else {
            y = y - Math.round(event.deltaY);

        }
       
        mas[j].style.top = -(y*0.1) + 'px';
        if (y*0.1 >= 450){ // 450  высота блока, заданная в css
        j++;
        y=0;
        // когда заканчиваются слои, нужно обнулить данные
        if (j == mas.length-1){
            document.querySelector('.jlehman').onmousewheel = null;
        }
        }
        console.log(y);
        return false; // что бы не прокручивалась вся страница
        
    }
}