import os
import pandas as pd
import pytube
from tqdm import tqdm
import argparse

class Extractor:
    def __init__(self, excel_path, save_path):
        self.excel_path = excel_path 
        self.save_path = save_path
        
    def read_excel_file(self):
        return pd.read_excel(self.excel_path)
        
    def extract(self, link):
        try:
            yt = pytube.YouTube(link)
            file_path = yt.streams.filter(only_audio=True).first().download()
            return file_path
        except Exception as e:
            print(e)
            return None
        
    def change_extension(self, file_path):
        try:
            new_file_path = file_path.replace('.mp4', '.mp3')
            os.rename(file_path, new_file_path)
            print(new_file_path)
            return new_file_path
        except Exception as e:
                print(e)
                return None
        
def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--excel_path', type=str)
    parser.add_argument('--save_path', type=str)
    args=parser.parse_args()
    
    extractor = Extractor(args.excel_path, args.save_path)
    df = extractor.read_excel_file()
    
    for ind, link in enumerate(tqdm(df['link'], total=len(df))):
        file_path = extractor.extract(link)
        new_file_path = extractor.change_extension(file_path)
        df.loc[ind, 'save_path'] = new_file_path
    
    df.to_excel(args.excel_path, index=False)

if __name__ == '__main__':
    main()
