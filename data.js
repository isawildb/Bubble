$(function() {

			
			var data = {label: 'Zweitstimmen in Berlin', amount: 1461185, 
			
			children: [
							{ label: 'Mitte', amount: 108367, color: '#ff3e00', 
					
								children: 	[
					
												{ label: 'SPD (28,7%)', amount: 31057, color: '#ff3e00' },
												{ label: 'CDU (17,9%)', amount: 19348, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (22,5%)', amount: 24331, color: '#008000' },
												{ label: 'DIE LINKE (11%)', amount: 11891, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (10,5%)', amount: 11333, color: '#FFA500' }
					
											]
							},
					
					
					
							{ label: 'Treptow-Köpenick', amount: 119336, color: '#ff3e00',
					
								children: 	[
					
												{ label: 'SPD (28,9%)', amount: 34452, color: '#ff3e00' },
												{ label: 'CDU (15,9%)', amount: 18975, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (10,7%)', amount: 12813, color: '#008000' },
												{ label: 'DIE LINKE (23%)', amount: 27408, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (9,3%)', amount: 11129, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Reinickendorf', amount: 110608, color: '#000000',
								
								children: 	[
				
												{ label: 'SPD (28,1%)', amount: 31066, color: '#ff3e00' },
												{ label: 'CDU (38,4%)', amount: 42422, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (13,6%)', amount: 15087, color: '#008000' },
												{ label: 'PIRATENPARTEI (6,7%)', amount: 7408, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Friedrichshain-Kreuzberg', amount: 104921, color: '#008000',
								
								children: 	[
				
												{ label: 'SPD (23,9%)', amount: 25107, color: '#ff3e00' },
												{ label: 'CDU (8,4%)', amount: 8785, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (30,3%)', amount: 31748, color: '#008000' },
												{ label: 'DIE LINKE (13%)', amount: 13590, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (14,7%)', amount: 15387, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Pankow', amount: 169595, color: '#ff3e00',
								
								children: 	[
				
												{ label: 'SPD (29,1%)', amount: 49388, color: '#ff3e00' },
												{ label: 'CDU (13,8%)', amount: 23448, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (19,1%)', amount: 32369, color: '#008000' },
												{ label: 'DIE LINKE (17,9%)', amount: 30354, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (10,5%)', amount: 17767, color: '#FFA500' }
											]
							},
					
					
					
							{ label: 'Charlottenburg-Wilmersdorf', amount: 138849, color: '#ff3e00',
					
								children: 	[
					
												{ label: 'SPD (31,2%)', amount: 43323, color: '#ff3e00' },
												{ label: 'CDU (28,2%)', amount: 39169, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (21,7%)', amount: 30142, color: '#008000' },
												{ label: 'DIE LINKE (3,6%)', amount: 5015, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (7%)', amount: 9721, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Spandau', amount: 92543, color: '#000000',
								
								children: 	[
				
												{ label: 'SPD (31,7%)', amount: 29294, color: '#ff3e00' },
												{ label: 'CDU (34,2%)', amount: 31652, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (12,5%)', amount: 11538, color: '#008000' },
												{ label: 'DIE LINKE (3,7%)', amount: 3454, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (7,3%)', amount: 6798, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Steglitz-Zehlendorf', amount: 149686, color: '#000000',
								
								children: 	[
				
												{ label: 'SPD (25,1%)', amount: 37507, color: '#ff3e00' },
												{ label: 'CDU (36,2%)', amount: 54140, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (21,1%)', amount: 31536, color: '#008000' },
												{ label: 'DIE LINKE (3%)', amount: 4512, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (6,4%)', amount: 9600, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Tempelhof-Schöneberg', amount: 146379, color: '#000000',
								
								children: 	[
				
												{ label: 'SPD (27,1%)', amount: 39643, color: '#ff3e00' },
												{ label: 'CDU (28,9%)', amount: 42369, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (23%)', amount: 33621, color: '#008000' },
												{ label: 'DIE LINKE (4%)', amount: 5891, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (7,8%)', amount: 11360, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Neukölln', amount: 112084, color: '#ff3e00',
								
								children: 	[
				
												{ label: 'SPD (27,4%)', amount: 30752, color: '#ff3e00' },
												{ label: 'CDU (26,7%)', amount: 29888, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (17,9%)', amount: 20018, color: '#008000' },
												{ label: 'DIE LINKE (5,6%)', amount: 6320, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (9,6%)', amount: 10760, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Marzahn-Hellersdorf', amount: 101723, color: '#ff3e00',
								
								children: 	[
				
												{ label: 'SPD (28,2%)', amount: 28636, color: '#ff3e00' },
												{ label: 'CDU (17,5%)', amount: 17780, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (5,6%)', amount: 5732, color: '#008000' },
												{ label: 'DIE LINKE (27,4%)', amount: 27863, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (8,8%)', amount: 8901, color: '#FFA500' }
											]
							},
					
		
		
							{ label: 'Lichtenberg', amount: 107094, color: '#ff3e00',
								
								children: 	[
				
												{ label: 'SPD (30,9%)', amount: 33107, color: '#ff3e00' },
												{ label: 'CDU (12,3%)', amount: 13182, color: '#000000' },
												{ label: 'BÜNDNIS 90/GRÜNE (7,6%)', amount: 8128, color: '#008000' },
												{ label: 'DIE LINKE (29%)', amount: 31076, color: '#FF0080' },
												{ label: 'PIRATENPARTEI (9,3%)', amount: 9941, color: '#FFA500' }
											]
							}

							
							
					
					
					
					 ]
					  };
			
			new BubbleTree({data: data, container: '.bubbletree'});
			
		});