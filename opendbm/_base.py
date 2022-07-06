
import os
from video import open_face_process as of

class BaseModel(object):
    def __init__():
        pass


    def transform(self, loader, file):

        loader.model = self.keyword

        loader._convert(self)

        # loader.preprocess()

        # loader.convert(self)

        # self.process(loader)

        # if loader.file_type == 'video':
        #      of.process_open_face(file, os.path.dirname(file), loader.out_path, '', self.keyword, video_tracking=False)
            #   OPENFACE_PATH, args.dbm_group,video_tracking=False)

        # loader.postprocess()
# 
    def openface(self, video_file, out_path, dbm_group, video_tracking=False):
        of.process_open_face(video_file, os.path.dirname(video_file), out_path, ' ', self.keyword, video_tracking=False)
   

    def _preprocess_video(self, loader):
        out_path = os.path.join(args.output_path, 'raw_variables')
        loader.audio_to_wav()
        of.process_open_face(loader.file, os.path.dirname(video_file), out_path, OPENFACE_PATH, args.dbm_group,video_tracking=False)


    def _preprocess_audio(self, loader):
        pass
    
