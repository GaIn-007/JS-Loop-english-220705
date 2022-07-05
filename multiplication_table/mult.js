let i = 0, num = 1;
for (num = 1; num <= 9; num++) {
    temparr = [];
    for (i = 1; i <= num; i++) {
        temparr.push(num+"*"+i+"="+i*num);
    }
    console.log(temparr.join(' '));
}