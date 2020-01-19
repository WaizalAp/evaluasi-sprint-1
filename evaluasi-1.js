var n = 9 

for (i = 0; i <= n; i++) {
    for (j = 0; j <= n; j++) {
    if (i == j || i + j == n || i == 5 || j == 5)
    document.write('+')
    else {
        document.write(' - ')
    }
}
document.write('<br>')
}