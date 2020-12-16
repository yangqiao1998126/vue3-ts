//
(() => {
 interface Iperson {
     fir:string,
     las:string,
     all:string
 }
 class PERSON {
     fir:string
     las:string
     all:string
     constructor(a,b){
        this.fir = a
         this.las = b
         this.all = this.fir+'---'+this.las
     }
 }
 var p = new PERSON('诸葛','金')
    function iii(oo:Iperson){
     return oo.fir+oo.las+'==='+oo.all
    }

    console.log(iii(p));
})()