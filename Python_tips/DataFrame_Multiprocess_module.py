# set up
import time
import os
import numpy as np
import pandas as pd
from multiprocessing import Pool
from tqdm import tqdm
from warnings import filterwarnings
filterwarnings('ignore')


def multiprocessing_initializer():
    ...
    # if initialize is needed, do it here

def function(x,y):
    ...
    # function to apply to each chunk
    # return list or array anything you want.
    # the DataFrame will be concatenated automatically in work_func below
    # Argument x anything you preprocess

def work_func(data, y) -> pd.DataFrame:
    ...
    # function to apply to each chunk
    # it will be applied in parallel
    # the data is splitted dataframe by the number of cores
    # return dataframe after parallel process
    """Sample Code
    tqdm.pandas()
    data['new'] = data.apply(lambda x: function1(x))
    data['new2'] = data['new'].progress_apply(lambda x: function2(x,y))
    return data
    """
    
def work_func_wrapper(args):
    ...
    # if the work_func needs more than one argument, use this wrapper
    # args is tuple of arguments
    """Sample Code
    x, y = args
    return work_fun(x, y)
    """

def parallel_dataframe(df, num_cores, y):
    ...
    # df: dataframe to apply work_func(not splitted)
    # df_split: splitted dataframe by the number of cores
    # num_cores: number of cores to use
    # pool : multiprocessing pool which is used to apply work_func
    # result : list of dataframe after parallel process
    """Sample Code
    df_split = np.array_split(df, num_cores)
    pool = Pool(num_cores, initializer=multiprocessing_initializer)
    result = list(tqdm(pool.imap(work_func_wrapper, [(d, y) for d in df_split]), total=len(df_split)))
    
    # for save by pool
    for i, df in enumerate(tqdm(result)):
        df.to_pickle(f'./result_{i}.pkl')
        print(f'saved : ./result_{i}.pkl')
    
    pool.close()
    pool.join()
    return df
    """

def main(stopwords):
    ...
    # import dataframe and apply parallel process
    """Sample Code
    start = time.time()
    print('start')
    df = pd.read_pickle(path)
    num_cores = 8 
    result = parallel_dataframe(df, work_func, num_cores, y)
    result.to_pickle(f'./result.pkl')
    print("time :", time.time() - start)
    """
    
if __name__ == '__main__':
    ...
    # run file
    # import args (y)
    """Sample Code
    y = pd.read_pickle(path)
    main(y)
    """