#include <iostream>
using namespace std;

int l, r, ans = 0, minn = 0x3f3f3f3f; 
int a[22][70], s[4];

void search(int x, int y) {
	if(x == s[y]) {
		minn = min(minn, max(l, r));
		return ;
	}
	
	l += a[x][y];
	search(x + 1, y);
	l -= a[x][y];
	
	r += a[x][y];
	search(x + 1, y);
	r -= a[x][y];
	
	return ;
}

int main() {
	
	for(int i = 0; i < 4; i ++) cin>>s[i];
	
	for(int i = 0; i < 4; i ++) {
		l = r = 0;
		minn = 0x3f3f3f3f;
		
		for(int j = 0; j < s[i]; j ++) cin>>a[j][i];
		search(0, i);
		
		ans += minn; 
	}
	
	cout<<ans;
	
	return 0;
} 
