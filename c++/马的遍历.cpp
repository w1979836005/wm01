#include <bits/stdc++.h>
using namespace std;

const int N = 410;
int n, m, x, y, front = 0, end = -1;
int st[N][N], g[N][N];
int dx[] = {-2, -1, 1, 2, 2, 1, -1, -2}, dy[] = {-1, -2, -2, -1, 1, 2, 2, 1};

struct node {
	int x;
	int y;
}q[N * N];

void bfs(int x, int y) {
	memset(g, -1, sizeof g);
	st[x][y] = 1;
	g[x][y] = 0;
	
	q[++end].x = x, q[end ++].y = y;
	while(front < end) {
		struct node t = q[front ++];
		for(int i = 0; i < 8; i ++) {
			int tx = t.x + dx[i], ty = t.y + dy[i];
			if(tx < 1 || ty < 1 || tx > n || ty > m) continue;
			if(st[tx][ty]) continue;
			
			st[tx][ty] = 1;
			g[tx][ty] = g[t.x][t.y] + 1;
			q[end].x = tx, q[end].y = ty;
			
			end ++;
		}
	}	
}

int main() {
	cin>>n>>m>>x>>y;
	
	bfs(x, y);
	
	for(int i = 1; i <= n; i ++) {
		for(int j = 1; j <= m; j ++) {
			cout<<g[i][j]<<" ";
		}
		cout<<endl;
	}
	
	return 0;
}
