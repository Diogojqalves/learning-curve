import logging 
#import anotherfile

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', datefmt='%m/%d/%Y %H:%M:%S') # to trigger DEBUG and info


logging.debug('This is a debug message')
logging.warning('This is a warning message') # .info  .error .debug


#on another file
logger = logging.getLogger(__name__)
logger.info('Hello from helper')

# https://www.youtube.com/watch?v=HGOBQPFzWKo&list=WL&index=6&t=9851s
# for big microservices use Json files - python-json-logger