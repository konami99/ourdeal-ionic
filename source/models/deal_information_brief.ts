module OurDeal {
	export class DealInformationBrief {
		DealID: number;	
		Title: string;
		PrimaryImage: string;
		Price: number;
		DealGUID: string;
	}
	
	export class DealInformationDetailed {
		DealID: number;	
		Title: string;
		PrimaryImage: string;
	}
}