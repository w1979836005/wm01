#include <iostream>
using namespace std;

const int N = 20;
int n, ans, Ans;
int a[N * 2], b[N * 2], col[N], res[N];

void dfs(int x) {
		if(x == n) {
			if(ans < 3)  {
				for(int i = 0; i < n; i ++) cout<<res[i]<<" ";
				cout<<endl;
				
				ans ++;
			}
			Ans ++;
			return ;
		}
		
		for(int i = 0; i < n; i ++) {
			
			if(!col[i] && !a[x + i] && !a[x - i + n]) {
				col[i] = a[x + i] = a[x - i + n] = true;
				res[x] = i + 1;
				dfs(x + 1);
				res[x] = 0;
				col[i] = a[x + i] = a[x - i + n] = false;
			}
			
		}
		return ;
}

int main() {
	cin>>n;
	
	dfs(0);	
	
	cout<<Ans;	
	return 0;
}
