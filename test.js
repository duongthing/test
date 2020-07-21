// ex1
let input = prompt('nhap 1 day so')
let ketqua = input.split(" ");
for(i = ketqua.length - 1;i >= 0;i--){
    console.log(ketqua[i])
}



//ex2
let input2 = [128, 2, 4, 16, 2, 128, 64, 4, 7, 4, 64]
let input = [128, 2, 4, 16, 2, 128, 64, 4, 7, 4, 64]
for(k=0;k<=input2.length-1;k++){
for(q=k+1;q<=input2.length-1;q++){
    if(input2[k]==input2[q]){
       input2.splice(q,1)
    }
}
}
for(i = 0;i<=input2.length-1;i++){
    for(j=i+1;j<=input2.length-1;j++){
        if(input2[i]*input2[j]==256){
            console.log(`vi tri so thu nhat la ${input.indexOf(input2[i])},vi tri so thu hai la ${input.indexOf(input2[j])}`)
        }
    }
}

