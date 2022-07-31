import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(filterArr : any [],filtertext:string,filterProp: string []) {
    let list:any=[];
    if (!filtertext) {
      return filterArr
    } else {
    filterArr.forEach(selectedObject => {
      filterProp.forEach(selectedProp => {
        if(selectedObject[selectedProp] &&selectedObject[selectedProp].toString().toLowerCase().includes(filtertext.toLowerCase())){
           if(!list.includes(selectedObject)) {
              list.push(selectedObject)
           } 
        }
      })
    })
    
  }
  return list;
}

}
