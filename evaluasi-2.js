var n = 9 

for (i = 0; i <= n; i++) {
    for (j = 0; j <= n; j++) {
     if (i %2 == 1 && j % 2 == 1 || i %2 == 0 && j % 2 == 0)
    document.write('+')
    else {
        document.write(' - ')
    }
}
document.write('<br>')
}       