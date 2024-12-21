#include <bits/stdc++.h>
using namespace std;

const int INF = 0x3f3f3f3f;
const int N = 310;
int m, mt[N][N];
int front = 0, end = -1; 
int st[N][N], d[N][N];

int dx[] = {-1, 1, 0, 0}, dy[] = {0, 0, -1, 1};

struct node {
	int x; 
	int y;
}q[N * N];


int bfs() {
	memset(d, INF, sizeof d);
	int x = 0, y = 0;
	
	q[++ end].x = x, q[end ++].y = y;
	st[x][y] = 1;
	d[x][y] = 0;
	
	while(front < end) {
		
		struct node t = q[front ++];
		
		if(mt[x][y] == INF) return  d[x][y];
		
		for(int i = 0; i < 4; i ++) {
			int tx = t.x + dx[i], ty = t.y + dy[i];
			if(tx < 0 || ty < 0 || tx > 300 || ty > 300) continue;
			if(st[tx][ty]) continue;
			
			d[tx][ty] = d[x][y] + 1;

			if(d[tx][ty] >= mt[tx][ty]) continue;
			
			q[end].x = tx, q[end].y = ty;
			st[tx][ty] = 1;
			end ++;
		}
	}
	return -1;
}

int main() {
	
	memset(mt, INF, sizeof mt);
	cin>>m;
	
	for(int i = 0; i < m; i ++) {
		int x, y, t;
		cin>>x>>y>>t;
		
		mt[x][y] = min(mt[x][y], t);
		for(int j = 0; j < 4; j ++)	{
			int tx = x + dx[j], ty = y + dy[j];
			if(tx < 0 || ty < 0 || tx > 300 || ty > 300) continue;
			mt[tx][ty] = min(mt[tx][ty], t);
		}
	}

	
	cout<<bfs()<<endl;	
	

	return 0;
}
