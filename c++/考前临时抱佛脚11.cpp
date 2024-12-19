#include <iostream>
using namespace std;

const int N = 100;
int a[N], b[N], c[N], d[N], st[N];

int main() {
	
	int n, res; 
	cin>>n;
	
	for(int i = 0; i < n; i ++) cin>>a[i];
	
	int left, right;
	for(int i = 0; i < n; i ++) {
		while(left != 0 && right != 0) {
			left --;
			right --;
			res ++;
		}
		if(left == 0) {
			left = a[i];
			continue;
		}
		if(right == 0) {
			right = a[i];
			continue;
		}
	}
	cout<<res<<endl;
	while(left != 0) left --, res ++;
	while(right != 0) right --, res ++;
	
	cout<<res;
	
	return 0;
}
