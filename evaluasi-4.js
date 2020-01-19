var n = 9;

for(i=1; i<=n; i++){
    for(j=n; j>=1; j--){
        if(i==j|| 1 == 2+j || 4+j==i || 6+j==i|| 8+j==i){
            document.write(" 1 ");
        }else if(i == 1+j|| 3+j==i || 5+j==i|| 7+j==i){
            document.write(" 0 ");
        }else{
            document.write("+");
        }
    }
    document.write("<br>");
}