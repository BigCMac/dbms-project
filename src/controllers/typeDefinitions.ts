// Request object definitions
export interface NewTeam {
	teamId: string;
	teamName: string;
	nickname: string;
	rank: number;
}
// End request object definitions

// API response data
export interface ApiResponse {
	redirectUrl?: string;
	errorMessage?: string;
}
// End API response data
