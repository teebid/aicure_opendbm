from schemas.biomaker_request import BiomakerRequest


class AudioBiomakerService:
    def process(self, group: str, biomaker_request: BiomakerRequest):
        if group == 'accoustic':
            return self.process_accoustic(group, biomaker_request)
        elif group == 'speech':
            return self.process_speech(group, biomaker_request)
        pass

    def process_accoustic():
        pass

    def process_speech():
        pass
