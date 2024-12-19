#include <bits/stdc++.h>
using namespace std;

const int N = 20;
int n, cou, ans , res[N];
int a[N * 2], b[N * 2], col[N];

void dfs(int u) {
	if(u == n) {
		if(cou < 3) {
			for(int i = 0; i < n; i ++)  printf("%d ", res[i] + 1);
			puts("");
			cou ++; 
		}
		
		ans ++;
		return ;
	}
	
	for(int i = 0; i < n; i ++) {
		if(!col[i] && !a[u + i] && !b[u - i + n]) {
			col[i] = a[u + i] = b[u - i + n] = true;
			res[u] = i;
			dfs(u + 1);
			res[u] = 0;
			col[i] = a[u + i] = b[u - i + n] = false;
		}
	}
	return ;
	
}
int main() {
	cin>>n;
	
	dfs(0);	
	cout<<ans;
	
	return 0;
}
