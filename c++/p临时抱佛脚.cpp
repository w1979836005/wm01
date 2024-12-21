#include "iostream"
using namespace std;
#define N 21

int aa[N][N];
int bb[2][N];
int flag[N];
int low = 1200;
int low2 = 0;

void dfs(int n,int left,int right,int level){
    int sum = 0;
    int sum2 = 0;
    if(left + right == n){
        for (int i = 0; i < left; ++i) {
            sum += bb[0][i];
        }
        for (int i = 0; i < right; ++i) {
            sum2 += bb[1][i];
        }
        int lowwww = 0;
        if(sum < sum2){
            lowwww= sum2;
        } else{
            lowwww= sum;
        }
        if(lowwww < low)
            low = lowwww;

        return;
    }
    for (int i = 0; i < n; ++i) {
        if(flag[i] == 1)continue;;
        flag[i] = 1;
        bb[0][left] = aa[level][i];
        dfs(n,left + 1,right,level);
        bb[1][right] = aa[level][i];
        dfs(n,left , right + 1,level);
        flag[i] = 0;
    }


}


int main(){
    int n[4];
    low = 1200;
    scanf("%d %d %d %d",&n[0],&n[1],&n[2],&n[3]);
    
    for(int i = 0; i < 4; i ++) {
	    	for (int j = 0; j < n[i]; j ++) {
	        scanf("%d",aa[i] + j);
	    	}
	
	    	dfs(n[i],0,0,0);
	    	low2 +=low;
	    	low = 1200;
	}
    
    
    printf("%d",low2);
    return 0;

}
